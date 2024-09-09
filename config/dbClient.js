import { MongoClient } from 'mongodb';

class dbClient{
    constructor(){
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=adoption`;
        this.client = new MongoClient(queryString);
        this.connectDB();
    }

    async connectDB(){
        try{
            await this.client.connect();
            this.db = this.client.db('adoption');
            console.log('Conectado a la base de datos');
        }catch(error){
            console.log(error);
        }       
    }
}

export default new dbClient;

