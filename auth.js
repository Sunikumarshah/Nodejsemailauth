const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const OAuth2 = google.auth.OAuth2;

// OAuth2 Client
const oauth2Client = new OAuth2(
  "CLIENT_ID",     // Client ID from Google Developer Console
  "CLIENT_SECRET", // Client Secret
  "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token: "REFRESH_TOKEN"
});

// Get access token
const accessToken = oauth2Client.getAccessToken();

// Create transporter
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'sunilnumetry07@gmail.com',
    clientId: 'CLIENT_ID',
    clientSecret: 'CLIENT_SECRET',
    refreshToken: 'REFRESH_TOKEN',
    accessToken: accessToken
  }
});

// Mail options
let mailOptions = {
  from: '"Sender Name" <sunilnumetry07@gmail.com>',
  to: 'shahsunilkumar373@gmail.com',
  subject: 'Hello OAuth2 ✔',
  text: 'Hello with OAuth2 authentication',
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
});
