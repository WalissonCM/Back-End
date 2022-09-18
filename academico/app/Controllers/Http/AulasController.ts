// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Aula from "App/Models/Aula"

export default class AulasController {

    index(){
        return Aula.all()
     }
 
     store({request}){

        const dados = request.only(["data", "conteudo", "turma_id"])

        return Aula.create(dados)

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
