import { MongoClient } from 'mongodb';

var dbMongo;
var connection

export default async function db(){
    if(!dbMongo || !connection){
        connection = await MongoClient.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  
        dbMongo = await connection.db("Main");
    }

    return dbMongo
}