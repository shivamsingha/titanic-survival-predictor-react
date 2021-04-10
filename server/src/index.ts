import express from 'express';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import cors, { CorsOptions } from 'cors';
import morgan from 'morgan';
import { predict } from './execute';

const PORT = process.env.PORT || 4000;

const corsOptions: CorsOptions = {
  origin: true,
  optionsSuccessStatus: 200,
  credentials: true
};

const helmetConfig = {
  frameguard: {
    action: 'deny'
  },
  referrerPolicy: {
    policy: 'no-referrer'
  }
};

const app = express();

app.use(helmet(helmetConfig));
app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOptions));
app.use(morgan('combined'));

app.post('/', predict);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
