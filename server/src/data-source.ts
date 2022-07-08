import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';

export const AppDataSource = new DataSource({
  name: 'default',
  type: 'postgres',
  host: 'localhost',
  port: 6500,
  username: 'admin',
  password: 'password123',
  database: 'node_typeorm',
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [__dirname + '/migration/*{.ts,.js}'],
  subscribers: [__dirname + '/subscriber/*{.ts,.js}'],
});
