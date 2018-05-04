import express from 'express';
import parser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';

const middlewares = [
  helmet(),
  parser.json(),
  parser.urlencoded({extended: true}),
  cors({
    allowedHeaders: 'Content-Type, Authorization',
    methods: ['GET, POST, PUT, DELETE', 'OPTIONS']
  })
]
class App {
  constructor() {
    this.express = express();
    this.loadMiddleware();
  }
  loadMiddleware() {
    this.express.use(...middlewares)
  }
}

export default new App();