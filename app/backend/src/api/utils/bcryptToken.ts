import { hash } from 'bcryptjs';
import IUser from '../interfaces/IUser';

export default async function createToken(user: IUser):Promise<string> {
  const { password } = user;

  const passwordHash = await hash(password, 8);

  return passwordHash;
}
