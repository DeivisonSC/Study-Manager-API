export class CreateCourseUseCase {
    constructor(courseRepository) {
        this.courseRepository = courseRepository;
    }

    async execute({ title, description, workload }) {
        // Validação que foi pedida na atividade
        if (!title || !description || !workload) {
            throw new Error("Título, descrição e carga horária são obrigatórios.");
        }

        const course = await this.courseRepository.create({ 
            title, 
            description, 
            workload: parseInt(workload) // carga horária sera salva como número
        });

        return course;
    }
}