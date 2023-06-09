import * as bcrypt from 'bcryptjs';
import { ModelStatic } from 'sequelize';
import Users from '../../database/models/UserModel';
import ErrorRequest from '../errors/errorRequest';
import { ILogin } from '../interfaces/Ilogin';
import IUser, { IServiceUser } from '../interfaces/IUser';
import generateToken from '../utils/generateToken';

const ID_NOT_FOUND = 'ID não existe';
const NAME_NOT_FOUND = 'Nome não existe';
const INVALID_USER_PASSWORD = 'Invalid email or password';

export default class UserService implements IServiceUser {
  protected model: ModelStatic<Users> = Users;

  async create(dto: IUser): Promise<Users> {
    return this.model.create({ ...dto });
  }

  async readAll(): Promise<Users[]> {
    return this.model.findAll();
  }

  async readById(id: number): Promise<Users> {
    const userFind = await this.model.findOne({ where: { id } });
    if (!userFind) throw new ErrorRequest(404, ID_NOT_FOUND);
    return userFind;
  }

  async readByEmail(email:string): Promise<Users> {
    const userFindEmail = await this.model.findOne({ where: { email } });
    if (!userFindEmail) throw new ErrorRequest(404, NAME_NOT_FOUND);
    return userFindEmail;
  }

  async update(id: string, dto: IUser): Promise<[number, Users[]]> {
    const userReadId = await this.model.findByPk(id);
    if (!userReadId) throw new ErrorRequest(404, ID_NOT_FOUND);

    const userUpdate = this.model.update({ dto }, {
      returning: true,
      where: { id: userReadId },
    });

    return userUpdate;
  }

  async delete(id: string): Promise<void> {
    const userDelete = await this.model.destroy({ where: { id } });
    if (!userDelete) throw new ErrorRequest(404, ID_NOT_FOUND);
  }

  async findLogin(loginBody: ILogin):Promise<string> {
    const { email, password } = loginBody;
    const readUser = await this.model.findOne({
      where:
        { email },
    });

    const passwordIsValid = await bcrypt.compare(password, readUser?.password || '-');

    if (!readUser || !passwordIsValid) {
      throw new ErrorRequest(401, INVALID_USER_PASSWORD);
    }
    const { dataValues } = readUser;
    const newToken = generateToken(dataValues);
    return newToken;
  }
}
