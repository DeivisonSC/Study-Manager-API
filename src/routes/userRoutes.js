import { Router } from 'express';
import { UserController } from '../controllers/UserController.js';

const userRoutes = Router();
const userController = new UserController();

//POST=> criar um novo usuario
userRoutes.post('/users', (req, res) => userController.handle(req, res));

//GET=>Buscar usuarios
userRoutes.get('/users', (req, res) => userController.list(req, res));

// GET => Buscar usuário pelo ID
userRoutes.get('/users/:id', (req, res) => userController.show(req, res));

// PUT => Atualizar um usuário existente
userRoutes.put('/users/:id', (req, res) => userController.update(req, res));

//DELETE=>
userRoutes.delete('/users/:id', (req, res) => userController.delete(req, res));

// GET => Consulta Relacional: Buscar os cursos de um usuário específico
userRoutes.get('/users/:id/courses', (req, res) => userController.getUserCourses(req, res));
export { userRoutes };