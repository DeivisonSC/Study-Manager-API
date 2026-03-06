import { Router } from 'express';
import { EnrollmentController } from '../controllers/EnrollmentController.js';

const enrollmentRoutes = Router();
const enrollmentController = new EnrollmentController();

// POST => Criar matrícula
enrollmentRoutes.post('/enrollments', (req, res) => enrollmentController.handle(req, res));

export { enrollmentRoutes };