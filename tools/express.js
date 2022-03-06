'use strict';

const express = require('express');
const cors = require('cors');
const compression = require('compression');

const app1 = express();
const app2 = express();
const port1 = 4200;
const port2 = 4201;
app1
  .use(cors())
  .use(compression())
  .use(express.static('./dist/apps/osm-shell'))
  .listen(port1);
app2
  .use(cors())
  .use(compression())
  .use(express.static('./dist/apps/osm-movies'))
  .listen(port2);
