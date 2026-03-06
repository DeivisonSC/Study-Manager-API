export class UpdateCourseUseCase {
    constructor(courseRepository) {
        this.courseRepository = courseRepository;
    }
    async execute(id, data) {
        const courseExists = await this.courseRepository.findById(id);
        if (!courseExists) throw new Error("Curso não encontrado para atualização.");
        
        // Garante que o workload seja número se for enviado
        if (data.workload) data.workload = parseInt(data.workload);
        
        return await this.courseRepository.update(id, data);
    }
}