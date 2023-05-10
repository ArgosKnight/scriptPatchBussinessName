import { MongoClient } from 'mongodb';
import express, { Application } from 'express';
import { PORT, URL, HOST } from './env';
import { router } from './company.route';
import bodyParser from 'body-parser';

const url = URL 
const port = PORT
const host = HOST
const app: Application = express();


app.use(bodyParser.json())
app.use('/api', router)

export let aricoreDb: any;

async function main() {
  const client = await MongoClient.connect(url!)
  aricoreDb = client.db('aricore');
  
  app.listen(port, host!, () => {
    console.log('PUERTO CONECTAO CORRETACMENTE EN EL PUERTO ---->', port);
  });
 
}
main()