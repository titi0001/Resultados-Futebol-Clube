import { Request, Response, Router } from 'express';
import { MatchController } from '../controllers';
import authUser from '../middlewares/authUser';
import { MatchService } from '../services';

const matchRoutes = Router();
const matchService = new MatchService();
const matchController = new MatchController(matchService);

matchRoutes.get(
  '/matches',
  authUser,
  (req: Request, res: Response) => matchController.findAllMatch(req, res),
);

export default matchRoutes;
