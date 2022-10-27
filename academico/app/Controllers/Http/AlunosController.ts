// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Aluno from "App/Models/Aluno"
import AlunoValidator from "App/Validators/AlunoValidator"

export default class AlunosController {

    index(){
        return Aluno.query().preload('chamada')
                            .preload('turma')
                            .paginate(1)
     }
 
    async store({request}){

        const dados = await request.validate(AlunoValidator)
        return Aluno.create(dados)

     }
     
    async show({request}){
        const id = request.param('id')
        return await Aluno.findOrFail(id)
        
    }

    async destroy({request}){
        const id = request.param('id')
        const aluno = await Aluno.findOrFail(id)
        return aluno.delete()
    }

    async update({request}){
        const id = request.param('id')
        const aluno = await Aluno.findOrFail(id)
        const dados = request.only(["nome", "cpf", "matricula", "email", "cep", "logadouro", "complemento", "numero", "bairro"])
        aluno.merge(dados)
        return aluno.save()
    }

}
