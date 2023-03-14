import * as jwt from 'jsonwebtoken';
import IUser from '../interfaces/IUser';

export default function generateToken(payload: IUser):string {
  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: '10d', algorithm: 'HS256' });
}
