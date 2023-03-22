import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import Team from '../database/models/TeamModel'
import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste rotas Team', () => {

  let chaiHttpResponse: Response;

  beforeEach(async () => {
    sinon
      .stub(Team, "findOne")
      .resolves({
        id: 1,
        teamName: 'Avaí/Kindermann',
      } as Team);
  });

  afterEach(()=>{
    (Team.findOne as sinon.SinonStub).restore();
  })

  it('Teste a rota Get se esta retornando todos os Times', async () => {
    chaiHttpResponse = await chai.request(app).get('/teams')
       expect(chaiHttpResponse.status).to.be.deep.equal(200);
  });

  it('Teste a rota get se esta retornando um time pelo id', async () => {
    chaiHttpResponse = await chai.request(app).get('/teams/1');
    expect(chaiHttpResponse.status).to.be.deep.equal(200);
  });
});
