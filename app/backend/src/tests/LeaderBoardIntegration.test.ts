import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import { Response } from 'superagent';
import { leaderBoardAwayMock, leaderBoardHomeMock } from './mocks/leaderBoard';

chai.use(chaiHttp);
const { expect } = chai;

describe("Teste das rota LeaderBoard", () => {
  let chaiHttpResponse: Response;

  it("Verifica se a rota /leaderboard/home retorna a tabela de times da casa", async function () {
    chaiHttpResponse = await chai.request(app).get("/leaderboard/home");
    
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(leaderBoardHomeMock);
  });

  it("Verifica se a rota /leaderboard/home retorna a tabela de times visitantes", async function () {
    chaiHttpResponse = await chai.request(app).get("/leaderboard/away");
    
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(leaderBoardAwayMock);
  });

});