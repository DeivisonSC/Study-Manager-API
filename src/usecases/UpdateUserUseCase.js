export class UpdateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(id, { name, email }) {
     
        const userExists = await this.userRepository.findById(id);
        // verificar se o usuário existe:
        // se nao existir =>
        if (!userExists) {
            throw new Error("Usuário não encontrado para atualização.  ");
        }

        //Se existe o usuário existe manda o repositório atualizar
        const updatedUser = await this.userRepository.update(id, { name, email });

        return updatedUser;
    }
}