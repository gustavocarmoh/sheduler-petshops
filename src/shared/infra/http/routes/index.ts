import { Router } from 'express';

import appointmentsRoute from '@modules/appointments/infra/routes/appointments.routes';
import usersRouter from '@modules/users/infra/routes/users.routes';
import sessionsRouter from '@modules/users/infra/routes/sessions.routes';
import passwordRouter from '@modules/users/infra/routes/password.routes';

const routes = Router();

routes.use('/appointments', appointmentsRoute);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);

export default routes;
