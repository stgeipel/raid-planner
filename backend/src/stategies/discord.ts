import passportDiscord from 'passport-discord';
import passport from 'passport';
import { connect } from '../database/database';
import { IUserDocument } from '../database/user/user.types';

const DiscordStrategy = passportDiscord.Strategy;
const db = connect();

passport.serializeUser((user: IUserDocument, done) => {
  console.log('Serialize');
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  console.log('Deserializing');
  const user = await db.UserModel.findById(id);
  if (user) done(null, user);
});

passport.use(
  new DiscordStrategy(
    {
      clientID: process.env.DASHBOARD_CLIENT_ID,
      clientSecret: process.env.DASHBOARD_CLIENT_SECRET,
      callbackURL: process.env.DASHBOARD_CALLBACK_URL,
      scope: ['identify', 'guilds'],
    },
    async (accessToken, refreshToken, profile, done) => {
      const { id, username, discriminator, avatar } = profile;

      try {
        const user = await db.UserModel.findOneAndUpdateOrCreate({
          discordId: id,
          discordTag: `${username}#${discriminator}`,
          avatar: avatar,
        });
        done(null, user);
      } catch (err) {
        console.log(err);
        return done(err, null);
      }
    }
  )
);
