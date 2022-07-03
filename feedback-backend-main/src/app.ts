import { debug } from 'debug';

import express, {
  Express, Request, Response, NextFunction,
} from 'express';

import { config } from 'dotenv';
import PessoasRouter from './app/routes/PessoasRoutes';
import initializeDB from './database';
import feedbackRouter from './app/routes/FeedbackRoutes';
import SetorRouter from './app/routes/SetorRoutes';

const log = debug('feedback-api:app');

config({
  path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env',
});

class App {
  public express: Express;

  constructor() {
    this.express = express();

    this.database();
    this.middlewares();
    this.routes();
  }

  public async database() {
    await initializeDB();
  }

  public middlewares() {
    this.express.use(express.json());
    this.express.use((req:Request, res: Response, next:NextFunction) => {
      log(req.query, `request em: ${new Date().toISOString()}`);
      next();
    });
  }

  public routes() {
    this.express.use('/pessoas', PessoasRouter);
    this.express.use('/feedback', feedbackRouter);
    this.express.use('/setor', SetorRouter);
  }
}

export default new App().express;
