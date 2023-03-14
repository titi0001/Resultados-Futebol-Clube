import * as jwt from 'jsonwebtoken';

export default function generateToken(username: string, password: string):string {
  const payload = { username, password };
  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: '10d', algorithm: 'HS256' });
}
