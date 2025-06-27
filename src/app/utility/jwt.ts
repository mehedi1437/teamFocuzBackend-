import jwt, { SignOptions } from 'jsonwebtoken';
import config from '../config';

// Ensure JWT_SECRET is defined and typed as string
const JWT_SECRET: string = config.jwt_secret as string;
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in environment variables');
}

export const generateToken = (
  payload: object,
  expiresIn: SignOptions['expiresIn'] = '7d'
): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
};

export const verifyToken = (token: string): any => {
  return jwt.verify(token, JWT_SECRET);
};
