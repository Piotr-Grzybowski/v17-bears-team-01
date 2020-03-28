const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer, gql } = require('apollo-server-express');
const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');
const passport = require('passport');

require('dotenv').config();

const port = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Connected to database!'))
  .catch(err => console.log(err));

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

require('./config/passport');

app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);
app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/', session: false }),
  function(req, res) {
    const token = req.user.token;
    
    res.redirect('http://localhost:3000?token=' + token);
  }
);

server.applyMiddleware({ app });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));