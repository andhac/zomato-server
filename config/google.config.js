import googleOAuth from "passport-google-oauth20";
import { UserModel } from "../database/allModels";

const googleStrategy = googleOAuth.Strategy;

export default (passport) => {
  passport.use(
    new googleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:4000/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        // Create a new user object
        const newUser = {
          fullName: profile.displayName,
          email: profile.emails[0].value,
          profilePic: profile.photos[0].value,
        };
        try {
          //check if the user exist
          const user = await UserModel.findOne({ email: newUser.email });

          if (user) {
            //generate token
            const token = user.generateJwtToken();

            //Return User
            done(null, { user, token });
          } else {
            //Create new User
            const user = await UserModel.create(newUser);

            //Generate token
            const token = user.generateJwtToken();
            //Return User
            done(null, { user, token });
          }
        } catch (error) {
          done(error, null);
        }
      }
    )
  );

  passport.serializeUser((userData, done) => done(null, { ...userData }));
  passport.deserializeUser((id, done) => done(null, id));
};
