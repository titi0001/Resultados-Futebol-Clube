import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import { Response } from 'superagent';
import Match from '../database/models/MatchesModel'
import allMatchTeamMock from './mocks/match';
import { allMatchesMock, allMatchesFinishedMock } from './mocks/patchMatch';

chai.use(chaiHttp);

const { expect } = chai;

let chaiHttpResponse: Response;

describe("teste das rotas Matches", () => {
  beforeEach(sinon.restore);

  it("Verifica se a rota /matches retorna todas as partidas finalizadas", async () => {
    chaiHttpResponse = await chai.request(app).get("/matches");

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(allMatchTeamMock);
  });

  it("Verifica se a rota /matches?inProgress retorna as partidas finalizadas", async function () {
      chaiHttpResponse = await chai.request(app).get("/matches?inProgress=false");

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(allMatchesFinishedMock);
  });

})
