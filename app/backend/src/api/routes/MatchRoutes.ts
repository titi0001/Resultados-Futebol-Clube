import { Request, Response, Router } from 'express';
import { MatchController } from '../controllers';
import { MatchService } from '../services';

const matchRoutes = Router();
const matchService = new MatchService();
const matchController = new MatchController(matchService);

matchRoutes.get(
  '/matches',
  (req: Request, res: Response) => matchController.findAllMatch(req, res),
);

export default matchRoutes;
