import { Request, Response, Router } from 'express';
import { LeaderBoardController } from '../controllers';
import { LeaderBoardService } from '../services';

const leaderBoardRoutes = Router();
const leaderBoardService = new LeaderBoardService();
const leaderBoardController = new LeaderBoardController(leaderBoardService);

leaderBoardRoutes.get(
  '/leaderboard/home',
  (req: Request, res: Response) => leaderBoardController.findAllHome(req, res),
);

leaderBoardRoutes.get(
  '/leaderboard/away',
  (req: Request, res: Response) => leaderBoardController.findAllAway(req, res),
);

export default leaderBoardRoutes;
