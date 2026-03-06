import { CourseRepository } from '../repositories/CourseRepository.js';
import { CreateCourseUseCase } from '../usecases/CreateCourseUseCase.js';
import { FindAllCoursesUseCase } from '../usecases/FindAllCoursesUseCase.js';
import { FindCourseByIdUseCase } from '../usecases/FindCourseByIdUseCase.js';
import { UpdateCourseUseCase } from '../usecases/UpdateCourseUseCase.js';
import { DeleteCourseUseCase } from '../usecases/DeleteCourseUseCase.js';

export class CourseController {
    async handle(req, res) {
        const { title, description, workload } = req.body;

        const courseRepository = new CourseRepository();
        const createCourseUseCase = new CreateCourseUseCase(courseRepository);

        try {
            const course = await createCourseUseCase.execute({ title, description, workload });

            return res.status(201).json({
                success: true,
                message: "Curso criado com sucesso",
                data: course
            });
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: error.message,
                data: null
            });
        }
    }

    async list(req, res) {
        const courseRepository = new CourseRepository();
        const findAllCoursesUseCase = new FindAllCoursesUseCase(courseRepository);
        try {
            const courses = await findAllCoursesUseCase.execute();
            return res.status(200).json({ success: true, message: "Cursos listados com sucesso", data: courses });
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message, data: null });
        }
    }

    async show(req, res) {
        const { id } = req.params;
        const courseRepository = new CourseRepository();
        const findCourseByIdUseCase = new FindCourseByIdUseCase(courseRepository);
        try {
            const course = await findCourseByIdUseCase.execute(id);
            return res.status(200).json({ success: true, message: "Curso encontrado", data: course });
        } catch (error) {
            return res.status(404).json({ success: false, message: error.message, data: null });
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const data = req.body;
        const courseRepository = new CourseRepository();
        const updateCourseUseCase = new UpdateCourseUseCase(courseRepository);
        try {
            const course = await updateCourseUseCase.execute(id, data);
            return res.status(200).json({ success: true, message: "Curso atualizado com sucesso", data: course });
        } catch (error) {
            return res.status(400).json({ success: false, message: error.message, data: null });
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        const courseRepository = new CourseRepository();
        const deleteCourseUseCase = new DeleteCourseUseCase(courseRepository);
        try {
            await deleteCourseUseCase.execute(id);
            return res.status(200).json({ success: true, message: "Curso deletado com sucesso", data: null });
        } catch (error) {
            return res.status(400).json({ success: false, message: error.message, data: null });
        }
    }
}