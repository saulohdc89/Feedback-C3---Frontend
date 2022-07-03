import { Repository } from 'typeorm';
import PessoasModel from '../models/PessoasModel';
import AppDataSource from '../../database/data-source';

export default class PessoasService {
  private PessoasRepository: Repository<PessoasModel>;

  constructor() {
    this.PessoasRepository = AppDataSource.getRepository(PessoasModel);
  }

  public index = async () => {
    const pessoas = await this.PessoasRepository.find({
      relations: {
        setor: true,
      },
    });
    return pessoas;
  };

  public get = async (idGet:number) => {
    const pessoas = await this.PessoasRepository.find({
      where: {
        id: idGet,
      },
      relations: {
        setor: true,
      },
    });
    return pessoas;
  };

  public create = async (pessoa : PessoasModel) => {
    const novapessoa = await this.PessoasRepository.insert(pessoa);
    return novapessoa;
  };

  public update = async (pessoa : PessoasModel, id: number) => {
    const novapessoa = await this.PessoasRepository.update(id, pessoa);
    return novapessoa;
  };

  public delete = async (id: number) => {
    const PessoaDeletada = await this.PessoasRepository.delete(id);
    return PessoaDeletada;
  };
}
