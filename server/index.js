import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import 'dotenv/config.js'

import posts from './routes.js/posts.js';


const app = express();

app.use(bodyParser.json({limit:'30mb', extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb', extended:true}));
app.use(cors());
app.use('/posts', posts);


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNETCTION_URI, {useNewURLParser: true})
.then(() => {app.listen(PORT, () => {
    console.log(`server running on port : ${PORT}`)
})})
.catch((error) => console.log(error.message));

