import { prisma } from '../lib/prisma.js';

export class UserRepository {
    async create(data){
        return await prisma.user.create({
            data: {
                name: data.name,
                email: data.email
            }
        });
    }

    async findByEmail(email) {
        return await prisma.user.findUnique({
            where: { email }
        });
    }

    async findAll() {
        return await prisma.user.findMany();
    }

    async findById(id) {
        return await prisma.user.findUnique({
            where: { id: Number(id) }
        });
    }

    async update(id, data) {
        return await prisma.user.update({
            where: { id: Number(id) },
            data: {
                name: data.name,
                email:data.email
            }
        });
    }
    
    async delete(id) {
        return await prisma.user.delete({
           where: { id: Number(id) } 
        });
    }

    async findUserWithCourses(id) {
        return await prisma.user.findUnique({
            where: { id: Number(id) },
            include: {
                enrollments: {
                    include: {
                        course: true
                    }
                }
            }
        });
    }

    //método para buscar usuário com seus cursos
    async findUserWithCourses(id) {
        return await prisma.user.findUnique({
            where: { id: parseInt(id) },
            include: {
                enrollments: {
                    include: {
                        course: true 
                    }
                }
            }
        });
    }



}

