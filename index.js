const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
const swaggerui = require('swagger-ui-express');
const bodyparser = require('body-parser');

//controllers

const middleware = require('./controllers/middleware');
const protecterRoute = require('./controllers/protectedController');
require('./controllers/environmentController');

//routes

const authRoute = require('./routes/authRoute');
const clienteRoute = require('./routes/clienteRoute');
const dominioRoute = require('./routes/dominioRoute');
const pagamentoRoute = require('./routes/pagamentoRoute');
const planoRoute = require('./routes/planoRoute');


const app = express();


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
},
(accessToken, refreshToken, profile, done) => {
    // Here you can handle user profile and tokens
    // For instance, you can save the user in your database
    const user = {
        id: profile.id,
        accessToken,
        refreshToken,
        profile
    };

    // Save user info in session
    done(null, user);
}));

// Serialize and deserialize user info for session handling
passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

app.use('/', authRoute);
app.use('/', middleware.isAuthenticated, clienteRoute, dominioRoute, pagamentoRoute, planoRoute);

// Start the server
app.listen(process.env.NODE_PORT, () => {
    console.log('Server running on ' + process.env.HOSTNAME + ':' + process.env.NODE_PORT);
});
