import { Application, jsonApiExpress,  KnexProcessor} from 'kurier';
import express from "express";
import Author from './resources/author';
import Knex from 'knex';

const app = new Application({
    namespace: 'api',
    types: [Author],
    defaultProcessor: KnexProcessor
})

app.services.knex = Knex({
    client: 'sqlite3',
    connection: {
      filename: "./mydb.sqlite"
    }    
})

const api = express();

api.use(jsonApiExpress(app));

api.listen(3000, () => {
    console.log(`Listening on port 3000`);
});

