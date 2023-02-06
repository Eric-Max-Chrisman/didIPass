import { Request, Response } from 'express';

function placeHolder(req: Request, res: Response): void {
  console.log('placeHolder');
  res.sendStatus(501);
}

export { placeHolder };
