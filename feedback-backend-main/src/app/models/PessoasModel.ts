import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne,
} from 'typeorm';

import FeedbackModel from './FeedbackModel';
import SetorModel from './SetorModel';

@Entity()

export default class PessoasModel {
    @PrimaryGeneratedColumn()
      id: number;

    @Column()
      nome: string;

    @Column()
      email: string;

    @OneToMany(() => FeedbackModel, (feedback) => feedback.avaliado)
      feedback: FeedbackModel;

    @ManyToOne(() => SetorModel, (setor) => setor.pessoas)
      setor: SetorModel;
}
