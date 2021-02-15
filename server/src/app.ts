const express = require('express');
const { graphqlHTTP } = require('express-graphql');
export const mongoose = require('mongoose');
const schema = require('./schema/schema');
const cors = require('cors');
const app = express();

app.use(cors());
// mongoDB接続
mongoose.connect(
  'mongodb+srv://admin:119211Jp@apollocluster.f9jfl.mongodb.net/test?retryWrites=true&w=majority'
);
mongoose.connection.once('open', () => {
  console.log('db connected');
});

// middleware
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.listen(4000, () => {
  console.log('listening port 4000');
});
