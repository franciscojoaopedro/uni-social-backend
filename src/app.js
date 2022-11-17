const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();
app.use(cors());
app.use(express.json());
app.routes(routes);
app.listen(process.env.PORTA || 3333);
