import passportDiscord from 'passport-discord';
import passport from 'passport';

const DiscordStrategy = passportDiscord.Strategy;

console.log(process.env.DASHBOARD_CLIENT_ID);

passport.use(
  new DiscordStrategy(
    {
      clientID: '761903019909578753',
      clientSecret: process.env.DASHBOARD_CLIENT_SECRET,
      callbackURL: process.env.DASHBOARD_CALLBACK_URL,
      scope: ['identify', 'guilds'],
    },
    function (accessToken, profile, done) {
      console.log('hellow World');
    }
  )
);
