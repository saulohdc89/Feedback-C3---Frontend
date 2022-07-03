import 'reflect-metadata';
import { DataSource } from 'typeorm';
import FeedbackModel from '../app/models/FeedbackModel';
import PessoasModel from '../app/models/PessoasModel';
import SetorModel from '../app/models/SetorModel';

export default new DataSource({
  type: 'sqlite',
  database: './src/database/database.db',
  synchronize: true,
  logging: false,
  entities: [
    PessoasModel,
    SetorModel,
    FeedbackModel,
  ],
  migrations: [],
  subscribers: [],
});
