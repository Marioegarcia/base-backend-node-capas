const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
require('dotenv').config();


const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
const { connectDb } = require('./libs/mongo');
const { config } = require('./config/config');
const { checkApiKey } = require('./middlewares/auth.handler');
const { default: mongoose } = require('mongoose');


connectDb(config.mongoDbUri);

const app = express();

app.use(express.json({ limit: '10mb' }));
app.use( express.urlencoded({ limit: '20mb', extended: true }) );
app.use( express.static('public') );


// app.use('api/v1/uploads', express.static('uploads'));

const whitelist = ['http://localhost:5173','http://localhost:8080','http://192.168.1.4:8080'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(options));

require('./utils/auth');

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', checkApiKey ,(req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(config.port, () =>
  console.log(`Server running on port: ${config.port}`)
);

mongoose.connect(config.mongoDbUri, config.dbConfigs)
  .then(() => {
    console.log('Connected to database');
  })
  .catch((error) => {
    console.error('Error connecting to database:', error);
  });










