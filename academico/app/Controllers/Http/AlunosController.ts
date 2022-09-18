// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Aluno from "App/Models/Aluno"

export default class AlunosController {

    index(){
        return Aluno.all()
     }
 
     store({request}){

        const dados = request.only(["nome", "cpf", "matricula", "email", "cep", "logadouro", "complemento", "numero", "bairro"])
      
        return Aluno.create(dados)

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