const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');

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
    clientID: 'uisdagh',
    clientSecret: 'ouweh',
    callbackURL: 'http://localhost:8080/auth/google/callback',
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

// Define routes
app.get('/', (req, res) => {
    res.send('Welcome! <a href="/auth/google">Login with Google</a>');
});

// Login route
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

// Callback route
app.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: '/profile',
    failureRedirect: '/',
}));

// Protected route
app.get('/profile', (req, res) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/');
    }

    const { profile } = req.user;
    res.send(`Hello ${profile.displayName || profile.name}!`);
});

// Start the server
app.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
});
