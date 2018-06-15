import express from 'express';
import bodyParser from 'body-parser';
import graphqlHTTP from 'express-graphql';
import schema from './graphql/schema';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use('/api', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(4040, () => {
  console.log('======================================');
  console.log('==== App is running at port 4040 =====');
  console.log('======================================');
});
