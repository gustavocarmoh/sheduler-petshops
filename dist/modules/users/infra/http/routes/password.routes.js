"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ForgotController_1 = __importDefault(require("../controllers/ForgotController"));
var ResetPasswordController_1 = __importDefault(require("../controllers/ResetPasswordController"));
var passwordRouter = (0, express_1.Router)();
var forgotPasswordController = new ForgotController_1.default();
var resetPasswordController = new ResetPasswordController_1.default();
passwordRouter.post('/forgot', forgotPasswordController.create);
passwordRouter.post('/reset', resetPasswordController.create);
exports.default = passwordRouter;
