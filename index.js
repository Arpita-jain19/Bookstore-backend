import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import bookRoute from './routes/book.routes.js'
import userRoute  from './routes/user.route.js'
import cors from "cors";
const corsConfig={
  origin:["*"],
  methods:["POST","GET"],
  credentials:true
}
const app=express();

app.use(cors(corsConfig
  
));
app.options(cors(corsConfig))
app.use(express.json())
dotenv.config();

const port = process.env.port||4000;
const URI = process.env.URI || "mongodb+srv://jainarpita56:Arpita19@cluster0.fp48pgw.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0";

try{
    mongoose.connect(URI);
    console.log("Connected to mongo")


}catch(err)
{
    console.log(err)

}

app.get('/', (req, res) => {
    
  res.send('bookstore app')
})

app.use('/book',bookRoute);
app.use('/user',userRoute)
app.listen(port, () => {
  console.log(` ${port}`)
})