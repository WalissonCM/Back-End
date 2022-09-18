// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Professor from "App/Models/Professor";

export default class ProfessorsController {
    
    index(){
        return Professor.all()
     }
 
     store({request}){

        const dados = request.only(["nome", "cpf", "matricula", "salario", "email", "telefone", "cep", "logadouro", "complemento", "numero", "bairro"])
    
         return Professor.create(dados)

     }
     
    create({request}){

    }

    show({request}){

    }

    edit({request}){

    }

    update({request}){

    }

    destroy({request}){

    }
     
}
