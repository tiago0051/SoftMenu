import mongoose from 'mongoose';

const uri = "mongodb+srv://app:YDmE4zf6RGHSiPEC@cluster0.kohrc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

export default async function handler(req, res) {
  if(mongoose.connection.readyState < 1)
    await mongoose.connect(uri)

  res.status(200).json({ name: 'John Doe' })
}
