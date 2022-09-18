// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Curso from "App/Models/Curso"


export default class CursosController {

    index(){
       return Curso.all()
    }

    store({request}){

        const dados = request.only(["nome", "duracao", "modalidade"])
    
        return Curso.create(dados)
        
    }
    
    create({request}){
        return ("create")
    }

    show({request}){
        return ("show")
    }

    edit({request}){
        return ("edit")
    }

    update({request}){
        return ("update")
    }

    destroy({request}){
        return ("destroy")
    }

}
