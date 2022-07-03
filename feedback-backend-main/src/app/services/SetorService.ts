import { Repository } from 'typeorm';
import SetorModel from '../models/SetorModel';
import AppDataSource from '../../database/data-source';

export default class SetorService {
  private setorRepository: Repository<SetorModel>;

  constructor() {
    this.setorRepository = AppDataSource.getRepository(SetorModel);
  }

  public index = async () => {
    const setores = await this.setorRepository.find();
    return setores;
  };

  public get = async (idGet:number) => {
    const setores = await this.setorRepository.find({
      where: {
        id: idGet,
      },
    });
    return setores;
  };

  public create = async (funcao: SetorModel) => {
    const novoSetor = await this.setorRepository.insert(funcao);
    return novoSetor;
  };

  public update = async (funcao: SetorModel, id: number) => {
    const setorAtualizado = await this.setorRepository.update(id, funcao);
    return setorAtualizado;
  };

  public delete = async (id: number) => {
    const setorDeletado = await this.setorRepository.delete(id);
    return setorDeletado;
  };
}
