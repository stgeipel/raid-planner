import * as bodyParser from 'body-parser';
import express from 'express';
import routes from './routes';
import dotenv from 'dotenv';
import passport from 'passport';

dotenv.config();

console.log(process.env);

const app = express();
app.set('port', process.env.PORT);
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
