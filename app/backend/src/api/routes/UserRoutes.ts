import { Request, Response, Router } from 'express';
import { UserController } from '../controllers';
import authUser from '../middlewares/authUser';
import loginValidate from '../middlewares/loginValidate';
import { UserService } from '../services';

const userRoutes = Router();
const userService = new UserService();
const userController = new UserController(userService);

userRoutes.post(
  '/login',
  loginValidate,
  (req: Request, res: Response) => userController.findUserLogin(req, res),
);

userRoutes.get(
  '/login/role',
  authUser,
  (req: Request, res: Response) => userController.findUser(req, res),
);

export default userRoutes;
