import { Request, Response } from 'express';
import { AuthService } from './auth.service';

export const AuthController = {
  register: async (req: Request, res: Response) => {
    try {
      const user = await AuthService.register(req.body);
      res.status(201).json({ user });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },

  login: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const { token, user } = await AuthService.login(email, password);
      
      res.status(200).json({ token, user });
    } catch (error: any) {
      res.status(401).json({ message: error.message });
    }
  },
};
