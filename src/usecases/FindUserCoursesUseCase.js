export class FindUserCoursesUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(id) {
        const user = await this.userRepository.findUserWithCourses(id);

        if (!user) {
            throw new Error("Usuário não encontrado.");
        }

        const formattedData = {
            id: user.id,
            name: user.name,
            email: user.email,
            courses: user.enrollments.map(enrollment => enrollment.course) 
        };

        return formattedData;
    }
}