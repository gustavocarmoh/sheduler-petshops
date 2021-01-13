import { Router } from 'express';

import appointmentsRoute from '../../../../modules/appointments/infra/routes/appointments.routes';
import usersRouter from '../../../../modules/users/infra/routes/users.routes';
import sessionsRoute from '../../../../modules/users/infra/routes/sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRoute);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRoute);

export default routes;
