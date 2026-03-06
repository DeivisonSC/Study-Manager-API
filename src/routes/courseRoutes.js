import { Router } from 'express';
import { CourseController } from '../controllers/CourseController.js';

const courseRoutes = Router();
const courseController = new CourseController();

// POST => Criar um novo curso (Você já tem essa)
courseRoutes.post('/courses', (req, res) => courseController.handle(req, res));

// GET => Buscar todos os cursos
courseRoutes.get('/courses', (req, res) => courseController.list(req, res));

// GET => Buscar um curso pelo ID
courseRoutes.get('/courses/:id', (req, res) => courseController.show(req, res));

// PUT => Atualizar um curso
courseRoutes.put('/courses/:id', (req, res) => courseController.update(req, res));

// DELETE => Excluir um curso
courseRoutes.delete('/courses/:id', (req, res) => courseController.delete(req, res));

export { courseRoutes };