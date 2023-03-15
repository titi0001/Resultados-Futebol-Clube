import { Request, Response, Router } from 'express';
import { MatchController } from '../controllers';
import authUser from '../middlewares/authUser';
import { MatchService } from '../services';

const matchRoutes = Router();
const matchService = new MatchService();
const matchController = new MatchController(matchService);

matchRoutes.get(
  '/matches',
  (req: Request, res: Response) => matchController.findAllMatch(req, res),
);

matchRoutes.patch(
  '/matches/:id/finish',
  authUser,
  (req: Request, res: Response) => matchController.finishMatch(req, res),
);

matchRoutes.patch(
  '/matches/:id',
  authUser,
  (req: Request, res: Response) => matchController.updateMatch(req, res),
);

matchRoutes.post(
  '/matches',
  authUser,
  (req: Request, res: Response) => matchController.createMatch(req, res),
);

export default matchRoutes;
