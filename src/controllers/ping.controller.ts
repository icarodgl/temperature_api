import { Request, Response } from 'express';

export class PingController {
  ping = (req: Request, res: Response) => {
    res.json({ message: 'Pong' });
  };
  error = (req: Request, res: Response) => {
    res.status(404).json({ message: 'error' });
  };
}
