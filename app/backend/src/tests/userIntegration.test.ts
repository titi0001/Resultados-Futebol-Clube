import * as sinon from 'sinon';
import * as chai from 'chai';
import * as bcrypt from 'bcryptjs';
// @ts-ignore
import chaiHttp = require('chai-http');
import { Model } from 'sequelize';
import { app } from '../app';
import{ usersMock, userModelMock  } from './mocks/user'
import { Response } from 'superagent';

chai.use(chaiHttp);
const { expect } = chai;

describe('Testes da rota Login', () => {
beforeEach(sinon.restore);
let chaiHttpResponse: Response;

  it('Verifica se o email e valido retorna o Http status 401', async () => {
    sinon.stub(Model, 'findAll').resolves(userModelMock);
    sinon.stub(bcrypt, 'compareSync').resolves(true);
    
    const response = await chai.request(app).post('/login').send(usersMock.user.invalidEmailUsers[0]);
    expect(response.status).to.be.equal(401);
    expect(response.body).to.deep.equal({ "message": "Invalid email or password" });
  });

  it('Verifica se o password é invalido retorna o Http status 400', async () => {
    sinon.stub(Model, 'findAll').resolves(userModelMock);
    sinon.stub(bcrypt, 'compareSync').resolves(true);
    
    const response = await chai.request(app).post('/login').send(usersMock.user.invalidPasswordUsers[0]);
    expect(response.status).to.be.equal(401);
    expect(response.body).to.deep.equal({  "message": "Invalid email or password" });
  });

  it('Verifica se email e password valido retorna um token', async () => {

    chaiHttpResponse = await chai.request(app).post('/login').send(usersMock.usersToLogin[0]);
    expect(chaiHttpResponse.status).to.be.deep.equal(200);
  });
   
  it('Verifica as regras de usuário na no rota login/role', async () => {
    chaiHttpResponse = await chai.request(app).get('/login/rule')

    expect(chaiHttpResponse.status).to.be.deep.equal(404);
  });

});