export class CreateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute({ name, email }) {
        const userAlreadyExists = await this.userRepository.findByEmail(email);
         
        if (userAlreadyExists) {
            throw new Error ("Já existe um usuário com este email.");
        }

        const user = await this.userRepository.create({ name, email });

        return user;
    }
}