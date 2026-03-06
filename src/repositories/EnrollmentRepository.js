import { prisma } from '../lib/prisma.js';

export class EnrollmentRepository {
    async create(data) {
        return await prisma.enrollment.create({ data });
    }

    async findByUserAndCourse(userId, courseId) {
        return await prisma.enrollment.findFirst({
            where: { 
                userId: parseInt(userId), 
                courseId: parseInt(courseId) 
            }
        });
    }
}