const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
const swaggerui = require('swagger-ui-express');
const bodyparser = require('body-parser');
const cors = require('cors');

//controllers

const middleware = require('./controllers/middleware');
const protectedController = require('./controllers/protectedController');
require('./controllers/environmentController');

//routes

const authRoute = require('./routes/authRoute');
const clienteRoute = require('./routes/clienteRoute');
const dominioRoute = require('./routes/dominioRoute');
const pagamentoRoute = require('./routes/pagamentoRoute');
const planoRoute = require('./routes/planoRoute');
const swaggerSpec = require('./controllers/swaggerController');


const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use('/docs', swaggerui.serve, swaggerui.setup(swaggerSpec));

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
}));

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Configure Google OAuth 2.0 strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URI,
    passReqToCallback: true,
  },
  function(request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
  }
));

// Serialize and deserialize user info for session handling
passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

app.use('/', authRoute);
app.use('/', clienteRoute,dominioRoute,pagamentoRoute,planoRoute);
app.use('/protected', middleware.isLoggedIn, protectedController.getProtectedResource);

// Start the server
app.listen(process.env.NODE_PORT, () => {
    console.log('Server running on ' + process.env.HOSTNAME + ':' + process.env.NODE_PORT);
});
