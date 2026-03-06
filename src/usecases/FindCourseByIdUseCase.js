export class FindCourseByIdUseCase {
    constructor(courseRepository) {
        this.courseRepository = courseRepository;
    }
    async execute(id) {
        const course = await this.courseRepository.findById(id);
        if (!course) throw new Error("Curso não encontrado.");
        return course;
    }
}