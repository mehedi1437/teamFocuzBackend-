import jwt from 'jsonwebtoken';
import config from '../config';

const JWT_SECRET = config.jwt_secret;
console.log(JWT_SECRET);
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in environment variables');
}

export const generateToken = (payload: object, expiresIn = '7d') => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};
