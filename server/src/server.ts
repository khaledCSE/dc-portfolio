import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

// * Routes
app.get('/', (_, res) => {
  res.json({ success: true, message: 'Hi There!' });
});

const port = process.env.PORT ?? 5000;
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server listening to port --> ${port}`));
