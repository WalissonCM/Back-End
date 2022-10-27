// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Curso from "App/Models/Curso"
import CursoValidator from "App/Validators/CursoValidator"


export default class CursosController {

    index(){
       return Curso.query().preload('disciplinas').paginate(1)
    }

    async store({request}){

        const dados = await request.validate(CursoValidator)
        return Curso.create(dados)
        
    }
    
    async show({request}){
        const id = request.param('id')
        return await Curso.findOrFail(id)
        
    }

    async destroy({request}){
        const id = request.param('id')
        const curso = await Curso.findOrFail(id)
        return curso.delete()
    }

    async update({request}){
        const id = request.param('id')
        const curso = await Curso.findOrFail(id)
        const dados = request.only(["nome", "duracao", "modalidade"])
        curso.merge(dados)
        return curso.save()
    }

}
