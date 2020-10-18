import express from 'express';
import passport from 'passport';
import '../stategies/discord';

const router = express.Router();

router.get('/discord', passport.authenticate('discord'));

router.get(
  '/discord/redirect',
  passport.authenticate('discord'),
  (req, res) => {
    const app = express();
    if (app.get('env') === 'development') res.redirect('http://localhost:3000');
    else res.redirect('/');
  }
);

router.get('/', (req, res) => {
  if (req.user) {
    res.send(req.user);
  } else {
    console.log(req.user);
    res.sendStatus(401);
  }
});

export default router;
