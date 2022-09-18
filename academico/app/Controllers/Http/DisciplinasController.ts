// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Disciplina from "App/Models/Disciplina";

export default class DisciplinasController {

    index(){
        return Disciplina.all()
     }
 
     store({request}){

        const dados = request.only(["nome", "cursos_id"])
        
        return Disciplina.create(dados)

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
