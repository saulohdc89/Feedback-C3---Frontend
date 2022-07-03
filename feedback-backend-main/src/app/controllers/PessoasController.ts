import { Request, Response } from 'express';
import PessoasModel from '../models/PessoasModel';
import PessoasService from '../services/PessoasService';

export default class PessoasController {
  private pessoasService: PessoasService;

  constructor() {
    this.pessoasService = new PessoasService();
  }

  public index = async (req: Request, res: Response) => {
    const pessoa = await this.pessoasService.index();
    res.send(pessoa).json();
    return;
  };

  public get = async (req: Request, res: Response) => {
    const { id } = req.params;

    const pessoa = await this.pessoasService.get(Number(id));
    res.send(pessoa).json();
    return;
  };

  public create = async (req: Request, res: Response) => {
    const pessoa = req.body as PessoasModel;
    console.log(pessoa);
    const novaPessoa = await this.pessoasService.create(pessoa);
    res.send(novaPessoa).json();
    return;
  };

  public update = async (req: Request, res:Response) => {
    const pessoa = req.body as PessoasModel;
    const { id } = req.params;

    res.send(this.pessoasService.update(pessoa, Number(id)));
    return;
  };

  public delete = async (req: Request, res: Response) => {
    const { id } = req.params;

    res.send(this.pessoasService.delete(Number(id)));
    return;
  };
}
