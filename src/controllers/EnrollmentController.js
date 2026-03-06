import { EnrollmentRepository } from '../repositories/EnrollmentRepository.js';
import { UserRepository } from '../repositories/UserRepository.js';
import { CourseRepository } from '../repositories/CourseRepository.js';
import { CreateEnrollmentUseCase } from '../usecases/CreateEnrollmentUseCase.js';

export class EnrollmentController {
    async handle(req, res) {
        const { userId, courseId } = req.body;

        const enrollmentRepository = new EnrollmentRepository();
        const userRepository = new UserRepository();
        const courseRepository = new CourseRepository();

        const createEnrollmentUseCase = new CreateEnrollmentUseCase(
            enrollmentRepository, 
            userRepository, 
            courseRepository
        );

        try {
            const enrollment = await createEnrollmentUseCase.execute({ userId, courseId });

            return res.status(201).json({
                success: true,
                message: "Matrícula realizada com sucesso!",
                data: enrollment
            });
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: error.message,
                data: null
            });
        }
    }
}