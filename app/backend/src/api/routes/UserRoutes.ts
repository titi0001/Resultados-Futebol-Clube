import { Request, Response, Router } from 'express';
import { UserController } from '../controllers';
import loginValidate from '../middlewares/loginValidate';
import { UserService } from '../services';

const UserRoutes = Router();
const userService = new UserService();
const userController = new UserController(userService);

UserRoutes.post(
  './login',
  loginValidate,
  (req: Request, res: Response) => userController.findUserLogin(req, res),
);
