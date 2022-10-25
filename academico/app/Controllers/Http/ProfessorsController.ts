// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Professor from "App/Models/Professor";

export default class ProfessorsController {
    
    index(){
        return Professor.query().preload('turma').paginate(1)
     }
 
    store({request}){

        const dados = request.only(["nome", "cpf", "matricula", "salario", "email", "telefone", "cep", "logadouro", "complemento", "numero", "bairro"])  
        return Professor.create(dados)

     }
     
    async show({request}){
        const id = request.param('id')
        return await Professor.findOrFail(id)
        
    }

    async destroy({request}){
        const id = request.param('id')
        const professor = await Professor.findOrFail(id)
        return professor.delete()
    }

    async update({request}){
        const id = request.param('id')
        const professor = await Professor.findOrFail(id)
        const dados = request.only(["nome", "cpf", "matricula", "salario", "email", "telefone", "cep", "logadouro", "complemento", "numero", "bairro"])
        professor.merge(dados)
        return professor.save()
    }

}
