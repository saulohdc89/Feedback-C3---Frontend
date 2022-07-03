import { Router } from 'express';
import SetorController from '../controllers/SetorController';

const SetorRouter = Router();

const setorController = new SetorController();

SetorRouter.get('/', setorController.index);
SetorRouter.post('/', setorController.create);
SetorRouter.put('/:id', setorController.update);
SetorRouter.delete('/:id', setorController.delete);

export default SetorRouter;
