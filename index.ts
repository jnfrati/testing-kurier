import { Application, jsonApiExpress,  KnexProcessor} from 'kurier';
import express from "express";
import Author from './resources/author';

const app = new Application({
    namespace: 'api',
    types: [Author],
    defaultProcessor: new KnexProcessor({
        client: 'sqlite3',
        connection: {
          filename: "./mydb.sqlite"
        }    
    })
})

const api = express();

api.use(jsonApiExpress(app));

api.listen(3000, () => {
    console.log(`Listening on port 3000`);
});

