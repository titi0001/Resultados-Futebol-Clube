import 'express-async-errors';
import * as express from 'express';
import teamRoutes from './api/routes';
import ErrorHandler from './api/middlewares/ErroHandler';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.initRoutes();
    this.initMiddlewares();

    this.config();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  /**
   * Rotas do projeto Aqui
   */
  private initRoutes(): void {
    this.app.use(teamRoutes);
  }

  private initMiddlewares() {
    this.app.use(ErrorHandler.handle);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// Essa segunda exportação é estratégica, e a execução dos testes de cobertura depende dela
export const { app } = new App();
