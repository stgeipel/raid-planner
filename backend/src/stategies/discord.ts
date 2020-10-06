import passport from 'passport';
import passportDiscord from 'passport-discord';
import refresh from 'passport-oauth2-refresh';

const DiscordStrategy = passportDiscord.Strategy;

console.log(process.env.DASHBOARD_CLIENT_ID);

passport.use(
  new DiscordStrategy(
    {
      clientID: process.env.DASHBOARD_CLIENT_ID,
      clientSecret: process.env.DASHBOARD_CLIENT_SECRET,
      callbackURL: process.env.DASHBOARD_CALLBACK_URL,
      scope: ['identify', 'guilds'],
    },
    async (accessToken, profile, done) => {
      console.log('hellow World');
    }
  )
);
