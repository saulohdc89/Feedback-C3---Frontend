import Pessoas from 'express';
import PessoasController from '../controllers/PessoasController';

const PessoasRouter = Pessoas.Router();
const pessoasController = new PessoasController();

PessoasRouter.get('/', pessoasController.index);
PessoasRouter.post('/', pessoasController.create);
PessoasRouter.put('/:id', pessoasController.update);
PessoasRouter.delete('/pessoas/:id', pessoasController.delete);

export default PessoasRouter;
