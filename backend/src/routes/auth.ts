import express from 'express';
import passport from 'passport';
import '../stategies/discord';

const router = express.Router();

router.get('/discord', passport.authenticate('discord'));

router.get(
  '/discord/redirect',
  passport.authenticate('discord'),
  (req, res) => {
    res.sendStatus(200);
  }
);

router.get('/', (req, res) => {
  if (req.user) {
    res.send(req.user);
  } else {
    res.sendStatus(401);
  }
});

export default router;
