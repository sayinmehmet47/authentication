import { AppDataSource } from './../data-source';
import { NextFunction, Request, Response } from 'express';
import { User } from '../entity/User';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  console.log(process.env.PORT);
  const users = await AppDataSource.manager.find(User);
  res.json(users);
};

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  const results = await AppDataSource.manager.findOneBy(User, {
    id: req.params.id,
  });
  return res.send(results);
};

// const addUser = async (req: Request, res: Response, next: NextFunction) => {
//   const user = await AppDataSource.manager.create(User, req.body);
//   const results = await AppDataSource.manager.save(user);

//   return res.send(results);
// };

const register = async (req: Request, res: Response, next: NextFunction) => {
  const { firstName, lastName, age, email, password } = req.body;
  try {
    const user = await AppDataSource.manager.findOneBy(User, {
      firstName: firstName,
    });
    if (user) {
      return res.status(400).send('User already exists');
    }
    const hash = await bcrypt.hash(password, 10);
    if (!hash) {
      return res.status(400).send('Error hashing password');
    }
    const newUser = await AppDataSource.manager.create(User, {
      firstName: firstName,
      password: hash,
      lastName: lastName,
      age: age,
      email: email,
    });

    const results = await AppDataSource.manager.save(newUser);
    if (!results) {
      return res.status(400).send('Error saving user');
    }

    const token = jwt.sign({ id: results.id }, process.env.JWT_SECRET);
    res.status(200).json({
      token,
      user: {
        id: results.id,
        firstName: results.firstName,
        lastName: results.lastName,
        age: results.age,
        email: results.email,
      },
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = {
  getUsers,
  getUser,
  register,
};
