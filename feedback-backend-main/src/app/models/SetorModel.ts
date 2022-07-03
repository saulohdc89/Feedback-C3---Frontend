import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany,
} from 'typeorm';

import PessoasModel from './PessoasModel';

@Entity()

export default class SetorModel {
  @PrimaryGeneratedColumn()
    id: number;

    @Column()
      nome: string;

    @Column()
      descricao: string;

    @OneToMany(() => PessoasModel, (pessoa) => pessoa.setor)
      pessoas: PessoasModel[];
}
