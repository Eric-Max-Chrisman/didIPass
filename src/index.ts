import express, { Express, Request, Response } from 'express';
// get, post, put, delete
const app: Express = express();
const PORT = 8000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

type NewProductRequest = {
  id: string;
  color: string;
};

app.post('/products', (req, res) => {
  const { id, color } = req.query as NewProductRequest;

  console.log(`id: ${id}`);
  console.log(`color: ${color}`);
  res.sendStatus(200);
});
