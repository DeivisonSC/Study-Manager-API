export class FindAllCoursesUseCase {
    constructor(courseRepository) {
        this.courseRepository = courseRepository;
    }
    async execute() {
        return await this.courseRepository.findAll();
    }
}