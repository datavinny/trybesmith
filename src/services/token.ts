import jwt, { SignOptions } from 'jsonwebtoken';
import User from '../interfaces/user';

const generateToken = (user: User): string => {
  const payload = user;
  const secret = process.env.JWT_SECRET as string || 'secret';
  const options: SignOptions = {
    algorithm: 'HS256',
    expiresIn: '7d',
  };
  const token = jwt.sign(payload, secret, options);
  return token;
};

export default generateToken;
