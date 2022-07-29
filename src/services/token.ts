import jwt from 'jsonwebtoken';
import User from '../interfaces/user';

const generateToken = (user: User): string => {
  const secret = process.env.JWT_SECRET as string;
  const token = jwt.sign(user, secret);
  return token;
};

export default generateToken;
