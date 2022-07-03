/* eslint-disable no-useless-return */
import { Request, Response } from 'express';
import FeedbackModel from '../models/FeedbackModel';
import FeedbackService from '../services/FeedbackService';

export default class FeedbackController {
  private feedbackservice: FeedbackService;

  constructor() {
    this.feedbackservice = new FeedbackService();
  }

  public index = async (req: Request, res: Response) => {
    try {
      const feedback = await this.feedbackservice.index();
      res.send(feedback).json();
      return;
    } catch {
      return;
    }
  };

  public get = async (req: Request, res: Response) => {
    const { id } = req.params;

    const feedback = await this.feedbackservice.get(Number(id));
    res.send(feedback).json();
    return;
  };

  public create = async (req: Request, res: Response) => {
    const feedback = req.body as FeedbackModel;

    const newFeedback = await this.feedbackservice.create(feedback);
    res.send(newFeedback).json();
    return;
  };

  public update = async (req: Request, res: Response) => {
    const feedback = req.body as FeedbackModel;
    const { id } = req.params;

    const newFeedback = this.feedbackservice.Update(feedback, Number(id));
    res.send(newFeedback);
    return;
  };

  public delete = async (req: Request, res: Response) => {
    const { id } = req.params;

    const feedback = this.feedbackservice.delete(Number(id));
    res.send(feedback);
    return;
  };
}
