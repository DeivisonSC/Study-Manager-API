import { prisma } from '../lib/prisma.js';

export class CourseRepository {
    async create(data) {
        return await prisma.course.create({ data });
    }

    async findAll() {
        return await prisma.course.findMany();
    }

    async findById(id) {
        // O parseInt garante que o ID seja um número, já que na URL ele vem como texto
        return await prisma.course.findUnique({ 
            where: {
                id: parseInt(id) 
            } 
        });
    }

    async update(id, data) {
        return await prisma.course.update({
            where: {
                id: parseInt(id) 
            }, data 
        });
    }

    async delete(id) {
        return await prisma.course.delete({
            where: {
                 id: parseInt(id) 
                } 
            });
    }
}