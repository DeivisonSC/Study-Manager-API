export class CreateEnrollmentUseCase {
    constructor(enrollmentRepository, userRepository, courseRepository) {
        this.enrollmentRepository = enrollmentRepository;
        this.userRepository = userRepository;
        this.courseRepository = courseRepository;
    }

    async execute({ userId, courseId }) {
        // o usuário existe?
        const user = await this.userRepository.findById(userId);
        if (!user) throw new Error("Usuário não encontrado.");

        //o curso existe?
        const course = await this.courseRepository.findById(courseId);
        if (!course) throw new Error("Curso não encontrado.");

        // a matrícula já existe? (Não permitir duplicada)
        const enrollmentExists = await this.enrollmentRepository.findByUserAndCourse(userId, courseId);
        if (enrollmentExists) throw new Error("O usuário já está matriculado neste curso.");

        // Se passou em todas as validações, cria a matrícula!
        const enrollment = await this.enrollmentRepository.create({ 
            userId: parseInt(userId), 
            courseId: parseInt(courseId) 
        });

        return enrollment;
    }
}