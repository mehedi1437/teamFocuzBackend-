import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../user/user.model';
import config from '../../config';

export const AuthService = {
 
  register: async (userData: any) => {
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) throw new Error('User already exists');

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = await User.create({ ...userData, password: hashedPassword });

    return user;
  },

  login: async (email: string, password: string) => {
    const user = await User.findOne({ email });
    if (!user) throw new Error('User not found');

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new Error('Invalid credentials');

    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role,
        category: user.category,
        team: user.team          
      },
      config.jwt_secret as string,
      { expiresIn: '7d' }
    );

    return { token, user };
  }
};
