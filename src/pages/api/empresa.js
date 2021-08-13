import mongoose from 'mongoose';

import empresaModel from '../../models/empresaModel'

export default async function handler(req, res) {
  const user = req.body.user | ""

  try{
    if(mongoose.connection.readyState < 1){
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      })
    }
  
  }finally{
    const search = await empresaModel.findOne({user: user})
    await mongoose.connection.close();
    res.status(200).json(search)
  }
}
