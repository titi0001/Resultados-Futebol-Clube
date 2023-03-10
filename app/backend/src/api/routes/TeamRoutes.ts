import { Request, Response, Router } from 'express';
import TeamController from '../controllers';
import TeamService from '../services';

const teamRoutes = Router();
const teamService = new TeamService();
const teamController = new TeamController(teamService);

teamRoutes.get('/teams', (req: Request, res: Response) => teamController.readAllUser(req, res));
teamRoutes.get('/team/:id', (req: Request, res: Response) => teamController.readById(req, res));

export default teamRoutes;
