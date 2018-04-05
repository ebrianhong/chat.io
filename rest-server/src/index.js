import express from 'express';
import parser from 'body-parser'

const app = express()

app.use(parser.parse())