export class DeleteCourseUseCase {
    constructor(courseRepository) {

        this.courseRepository = courseRepository;
    }

    async execute(id) {
        const courseExists = await this.courseRepository.findById(id);
        if (!courseExists) throw new Error("Curso não encontrado para exclusão.");
        await this.courseRepository.delete(id);
    }
}