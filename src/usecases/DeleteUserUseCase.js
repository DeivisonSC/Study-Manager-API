export class DeleteUserUseCase { 
    constructor(userRepository){
        this.userRepository = userRepository; 
    }

    async execute(id) {
        const userExists = await this.userRepository.findById(id);
        //se o usuario não existir
        if(!userExists) {
            throw new Error("Usuário não encontrado para exclusão.");
        }
        //se o usuário buscado for encontrado, o repositorio apaga
        await this.userRepository.delete(id);
    }
}