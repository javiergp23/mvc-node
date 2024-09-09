import dbClient from '../config/dbClient.js';

class mascotasModel{
    async create(req, res){
        const colMascotas = dbClient.db.collection('mascotas');
        await colMascotas.insertOne(mascota)
    }
}

export default new mascotasModel();