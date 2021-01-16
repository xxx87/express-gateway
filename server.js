const path = require('path');
const gateway = require('express-gateway');

import '../docker-micro-1/src/bin/www'
import '../docker-micro-2/src/bin/www'

gateway()
  .load(path.join(__dirname, 'config'))
  .run();
