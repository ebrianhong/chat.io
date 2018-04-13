import express from 'express';
import parser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
const app = express();

app.use(helmet());
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(cors({
  allowedHeaders: 'Content-Type, Authorization',
  methods: ['GET, POST, PUT, DELETE', 'OPTIONS'],
}));

app.use()