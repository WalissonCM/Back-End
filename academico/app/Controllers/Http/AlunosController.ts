// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Aluno from "App/Models/Aluno"

export default class AlunosController {

    index(){
        return Aluno.query().preload('turma').paginate(1)
     }
 
    store({request}){

        const dados = request.only(["nome", "cpf", "matricula", "email", "cep", "logadouro", "complemento", "numero", "bairro"])
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
