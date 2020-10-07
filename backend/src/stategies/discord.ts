import passportDiscord from 'passport-discord';
import passport from 'passport';
import User from '../database/schema/User';

const DiscordStrategy = passportDiscord.Strategy;

passport.serializeUser((user: any, done) => {
  console.log('Serialize');
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  console.log('Deserializing');
  const user = await User.findById(id);
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
      const { id, username, discriminator, avatar, guilds } = profile;

      try {
        const findUser = await User.findOneAndUpdate(
          { discordId: id },
          {
            discordTag: `${username}#${discriminator}`,
            avatar,
            guilds,
          },
          { new: true }
        );

        if (findUser) {
          return done(null, findUser);
        } else {
          const newUser = await User.create({
            discordId: id,
            discordTag: `${username}#${discriminator}`,
            avatar,
            guilds,
          });
          return done(null, newUser);
        }
      } catch (err) {
        console.log(err);
        return done(err, null);
      }
    }
  )
);
