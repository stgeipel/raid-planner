import dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
import express from 'express';

dotenv.config();

import passport from 'passport';
import routes from './routes';
import db from './database/db';
import session from 'express-session';
import mongoose from 'mongoose';

const MongoDBStore = require('connect-mongodb-session')(session);

db.then(() => console.log('Connected to MongoDB.')).catch((err) =>
  console.log(err)
);

const app = express();
const store = new MongoDBStore({
  uri: process.env.SESSION_DB_CONNECTION,
});
app.set('port', process.env.PORT);

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week,
    },
    resave: true,
    saveUninitialized: true,
    store: store,
  })
);

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', routes);

app.listen(app.get('port'), () => {
  console.log(
    '  App is running at http://localhost:%d in %s mode',
    app.get('port'),
    app.get('env')
  );
  console.log('  Press CTRL-C to stop\n');
});
