import { Request, Response } from 'express';
import SetorModel from '../models/SetorModel';
import SetorService from '../services/SetorService';

export default class SetorController {
  private setorService: SetorService;

  constructor() {
    this.setorService = new SetorService();
  }

  public index = async (req: Request, res: Response) => {
    const funcoes = await this.setorService.index();
    res.send(funcoes).json();
    return;
  };

  public create = async (req: Request, res: Response) => {
    const setor = req.body as SetorModel;

    const novoSetor = await this.setorService.create(setor);
    res.send(novoSetor).json();
    return;
  };

  public update = async (req: Request, res:Response) => {
    const funcao = req.body as SetorModel;
    const { id } = req.params;

    res.send(this.setorService.update(funcao, Number(id)));
    return;
  };

  public delete = async (req: Request, res: Response) => {
    const { id } = req.params;

    res.send(this.setorService.delete(Number(id)));
    return;
  };
}
