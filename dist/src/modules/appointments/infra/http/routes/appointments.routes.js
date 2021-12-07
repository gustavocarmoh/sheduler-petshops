"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ensureAuthenticated_1 = __importDefault(require("@modules/users/infra/http/middlewares/ensureAuthenticated"));
var AppointmentsController_1 = __importDefault(require("../controllers/AppointmentsController"));
var appointmentsRouter = (0, express_1.Router)();
var appointmentsController = new AppointmentsController_1.default();
appointmentsRouter.use(ensureAuthenticated_1.default);
/*
appointmentsRouter.get('/', async (request, response) => {
  const appointment = await appointmentsRepository.find();

  const appointmentsRepository =  new AppointmentRepository();

  return response.json(appointment);
});
*/
appointmentsRouter.post('/', appointmentsController.create);
exports.default = appointmentsRouter;