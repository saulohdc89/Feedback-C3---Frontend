import feedback from 'express';
import FeedbackController from '../controllers/FeedbackController';

const feedbackRouter = feedback.Router();
const feedbackController = new FeedbackController();

feedbackRouter.get('/', feedbackController.index);

feedbackRouter.post('/', feedbackController.create);

feedbackRouter.put('/:id', feedbackController.update);

feedbackRouter.delete('/:id', feedbackController.delete);

export default feedbackRouter;
