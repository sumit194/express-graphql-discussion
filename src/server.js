import express from 'express';
import bodyParser from 'body-parser';
import graphqlHTTP from 'express-graphql';
import DataLoader from 'dataloader';
import schema from './graphql/schema';
import getUser from './Data/function';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use('/api', graphqlHTTP(() => {
  const personLoader = new DataLoader(keys => Promise.all(keys.map(getUser)));
  const loaders = {
    person: personLoader,
  };
  return {
    context: { loaders },
    schema,
    graphiql: true,
  };
}));

app.listen(4040, () => {
  console.log('======================================');
  console.log('==== App is running at port 4040 =====');
  console.log('======================================');
});
