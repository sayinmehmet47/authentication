import { AppDataSource } from './../data-source';
import { NextFunction, Request, Response } from 'express';
import { User } from '../entity/User';

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  const users = await AppDataSource.manager.find(User);
  res.json(users);
};

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  const results = await AppDataSource.manager.findOneBy(User, {
    id: req.params.id,
  });
  return res.send(results);
};

const addUser = async (req: Request, res: Response, next: NextFunction) => {
  const user = await AppDataSource.manager.create(User, req.body);
  const results = await AppDataSource.manager.save(user);

  return res.send(results);
};

module.exports = {
  getUsers,
  getUser,
  addUser,
};
