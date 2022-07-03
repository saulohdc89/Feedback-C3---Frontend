import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne,
} from 'typeorm';

import PessoasModel from './PessoasModel';

  @Entity()

export default class FeedbackModel {
      @PrimaryGeneratedColumn()
        id: number;

      @Column()
        titulo: string;

      @Column()
        nivel: number;

      @Column()
        texto: string;

      @ManyToOne(() => PessoasModel, (avaliado) => avaliado.feedback)
        avaliado: PessoasModel;
}
