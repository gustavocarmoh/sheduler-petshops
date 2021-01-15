import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();

appointmentsRouter.use(ensureAuthenticated);

/*
appointmentsRouter.get('/', async (request, response) => {
  const appointment = await appointmentsRepository.find();

  const appointmentsRepository =  new AppointmentRepository();

  return response.json(appointment);
});
*/

appointmentsRouter.post('/', appointmentsController.create);

export default appointmentsRouter;
