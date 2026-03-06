import express from 'express';
import { userRoutes } from './routes/userRoutes.js';
import { courseRoutes } from './routes/courseRoutes.js';
import { enrollmentRoutes } from './routes/enrollmentRoutes.js';

const app = express();


app.use(express.json());

app.use(courseRoutes);
app.use(userRoutes);
app.use(enrollmentRoutes);

const PORT = 3000;

app.listen(PORT, ()=> {
    console.log(`Study-Manager-API  rodando na porta ${PORT}`);
});