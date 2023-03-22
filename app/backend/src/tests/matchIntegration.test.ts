import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import { Response } from 'superagent';
import {
  allMatchTeamMock,
  allMatchesFinishedMock,
  allMatchesProgressMock,
} from './mocks/match';
import { newMatchResponse, validNewMatch } from './mocks/createMatch';
import Match from '../database/models/MatchesModel';
import { tokenValidMock , invalidTokenValidMock } from './mocks/user';

chai.use(chaiHttp);

const { expect } = chai;

let chaiHttpResponse: Response;

  describe("Criando partidas na rota Match", () => {
    beforeEach(async () => {
      sinon.stub(Match, "create").resolves(newMatchResponse as Match);
    });

    afterEach(() => {
      (Match.create as sinon.SinonStub).restore();
    });

    it("Verifica se a rota /matches se e possível criar um partida", async () => {
      chaiHttpResponse = await await chai
        .request(app).post("/matches").send(validNewMatch)
        .set("authorization", tokenValidMock);

      expect(chaiHttpResponse.status).to.be.equal(201);
      expect(chaiHttpResponse.body).to.be.deep.equal(newMatchResponse);
    });

    it("Verifica se a rota /matches se e possível criar um partida sem token", async () => {
      chaiHttpResponse = await await chai
        .request(app)
        .post("/matches")
        .send(validNewMatch);

      expect(chaiHttpResponse.status).to.be.equal(401);
      expect(chaiHttpResponse.body).to.be.deep.equal({ message: "Token not found" });
    });

    it("Verifica se a rota /matches se e possível criar um partida com token invalido", async () => {
        chaiHttpResponse = await await chai
          .request(app).post("/matches").send(validNewMatch)
          .set("authorization", invalidTokenValidMock);
  
        expect(chaiHttpResponse.status).to.be.equal(401);
        expect(chaiHttpResponse.body).to.be.deep.equal({ message : "Token must be a valid token" });
      });
  });

  describe('teste das rotas Matches', () => {
    beforeEach(sinon.restore);

    it('Verifica se a rota /matches retorna todas as partidas finalizadas', async () => {
      chaiHttpResponse = await chai.request(app).get('/matches');
  
      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(allMatchTeamMock);
    });
  
    it('Verifica se a rota /matches?inProgress retorna as partidas finalizadas', async () => {
      chaiHttpResponse = await chai.request(app).get('/matches?inProgress=false');
  
      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(allMatchesFinishedMock);
    });
  
    it('Verifica se a rota /matches?inProgress retorna as partidas em andamento', async () => {
      chaiHttpResponse = await chai.request(app).get('/matches?inProgress=true');
  
      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(allMatchesProgressMock);
    });
  
  });
