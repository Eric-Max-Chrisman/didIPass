import { Request, Response } from 'express';

function notUsed(req: Request, res: Response): void {
  res.sendStatus(501);
}

export { notUsed };
