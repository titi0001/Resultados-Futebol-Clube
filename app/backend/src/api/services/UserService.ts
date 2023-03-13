import { ModelStatic } from 'sequelize';
import Users from '../../database/models/UserModel';
import ErrorRequest from '../errors/errorRequest';
import IUser, { IServiceUser } from '../interfaces/IUser';

const ID_NOT_FOUND = 'ID não existe';

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
    if (!userFind) throw new ErrorRequest(ID_NOT_FOUND);
    return userFind;
  }

  async update(id: string, dto: IUser): Promise<[number, Users[]]> {
    const userReadId = await this.model.findByPk(id);
    if (!userReadId) throw new ErrorRequest(ID_NOT_FOUND);

    const userUpdate = this.model.update({ dto }, {
      returning: true,
      where: { id: userReadId },
    });

    return userUpdate;
  }

  async delete(id: string): Promise<void> {
    const userDelete = await this.model.destroy({ where: { id } });
    if (!userDelete) throw new ErrorRequest(ID_NOT_FOUND);
  }

  async findLogin(loginBody: IUser):Promise<string> {
    const { email } = loginBody;
    const readUser = await this.model.findOne({
      where:
        { email },
    });
    
  }
}
