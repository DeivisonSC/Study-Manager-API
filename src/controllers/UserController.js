

import { UserRepository } from '../repositories/UserRepository.js';
import { CreateUserUseCase } from  '../usecases/CreateUserUseCase.js';
import { DeleteUserUseCase } from '../usecases/DeleteUserUseCase.js';
import { FindAllUsersUseCase } from '../usecases/FindAllUsersUseCase.js';
import { FindUserByIdUseCase } from '../usecases/FindUserByIdUseCase.js';
import { UpdateUserUseCase } from '../usecases/UpdateUserUseCase.js';
import { FindUserCoursesUseCase } from '../usecases/FindUserCoursesUseCase.js';
export class UserController {
    async handle(req, res) {
        console.log("Corpo da requisição:", req.body);
        const { name, email } = req.body;

        const userRepository = new UserRepository();
        const createUserUseCase = new CreateUserUseCase(userRepository);

        try {
            const user = await createUserUseCase.execute({ name, email });

            return res.status(201).json ({
                success: true,
                message: "Usuário criado com sucesso",
                data: user
            });
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: error.message,
                data:null
            });
        }
    }

    async list(req, res){
        const userRepository = new UserRepository();
        const findAllUsersUseCase = new FindAllUsersUseCase(userRepository);


        try {

            const users = await findAllUsersUseCase.execute();

            return res.status(200).json({
                success: true,
                message: "Usuários listados com sucesso",
                data: users
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Erro ao  buscar Usuário: " + error.message,
                data: null
            });
        }
    }


    async show(req, res){
        const { id } = req.params;

        const userRepository = new UserRepository();
        const findUserByIdUseCase = new FindUserByIdUseCase(userRepository);
        
        try {
            const user = await findUserByIdUseCase.execute(id);

            return res.status(200).json({
                success: true,
                message: "Usuário encontrado com sucesso",
                data: user
            });
        } catch (error) {
            return res.status(404).json({
                success: false,
                message: error.message,
                data: null
            });
        }
    }

    async update(req, res) {

        const { id } = req.params;
        const { name, email } = req.body;

        const userRepository = new UserRepository();
        const updateUserUseCase = new UpdateUserUseCase(userRepository);

        try {
            // Passando o ID e os novos dados para o UseCase
            const user = await updateUserUseCase.execute(id, { name, email });

            return res.status(200).json({
                success: true,
                message: "Usuário atualizado com sucesso",
                data: user
            });
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: error.message,
                data: null
            });
        }
    }


    async delete (req, res) {

        const { id } = req.params;

        const userRepository = new UserRepository();
        const deleteUserUseCase = new DeleteUserUseCase(userRepository);

        try {

            await deleteUserUseCase.execute(id);

            return res.status(200).json({
                success: true,
                message: "Usuário deletado com sucesso",
                data: null
            });
        } catch (error) {
            return res.status(400).json ({
                success: false,
                message: error.message,
                data: null
            });
        }
    }

    async getUserCourses(req, res) {
        const { id } = req.params;
        const userRepository = new UserRepository();
        const findUserCoursesUseCase = new FindUserCoursesUseCase(userRepository);

        try {
            const data = await findUserCoursesUseCase.execute(id);

            return res.status(200).json({
                success: true,
                message: "Cursos do usuário encontrados com sucesso",
                data: data
            });
        } catch (error) {
            return res.status(404).json({
                success: false,
                message: error.message,
                data: null
            });
        }
    }






}