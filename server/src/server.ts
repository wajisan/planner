import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3998;

app.use(cors());
app.get('/', (req: Request, res: Response) => {
    const responseData = {
        messages: 'Hello, Worldssze!'
    };
    res.json(responseData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});