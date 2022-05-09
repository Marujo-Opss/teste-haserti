import cors from 'cors';
import express from 'express';
import { env } from 'process';
import { routes } from './routes';


const app = express ();

app.use(cors());
app.use(express.json());
app.use(routes)



app.listen(process.env.PORT, ()=>{
    console.log('HTTP RUNING')
});