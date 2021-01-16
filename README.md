# Express Gateway for microservices
Application for demonstration of Express Gateway (NodeJS).

[Express Gateway official website](https://www.express-gateway.io/)
#
To demonstrate how the application works, install two simple microservices:

[Microservice 1](https://github.com/xxx87/docker-micro-1) and [Microservice 2](https://github.com/xxx87/docker-micro-2)

Microservices can be run Locally or in Docker using Dockerfile or Docker-Compose.
#
### After installing and running microservices, launch Gateway:
- Install dependencies
```
npm i
```
- Run app
```
npm start
```
By default, Gateway will run on port `8080` at `localhost:8080`
### Now you do not need to access each service at different IP addresses, just go to `"localhost:8080"` and the corresponding name api 1 or api 2 or api [n]...
```
example: http://localhost:8080/second-micros/healthcheck
```

#### __"express-gateway" already has built-in support for restarting when code changes !__

### If you run your applications (microservices) locally:
- If you want all your microservices to start together with the gateway (so as not to start each microservice manually),
you can change the server.js file by importing the necessary microservices into it:
```
import '../docker-micro-1/src/bin/www'
import '../docker-micro-2/src/bin/www'
```
After edit:
```
const path = require('path');
const gateway = require('express-gateway');

import '../docker-micro-1/src/bin/www'
import '../docker-micro-2/src/bin/www'

gateway()
  .load(path.join(__dirname, 'config'))
  .run();
```
- Now change the startup script in your package.json file:
```
from:  "start": "node server.js"
to:    "start": "babel-node server.js"
```
- If you want your microservices to be restarted when the code changes, modify the package.json file to add a new start script "watch" after "start":
```
"watch": "nodemon --exec babel-node server.js"
```
- to start, run the command:
```
npm run watch
```