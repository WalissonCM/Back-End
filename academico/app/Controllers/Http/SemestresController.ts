// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Semestre from "App/Models/Semestre";
import SemestreValidator from "App/Validators/SemestreValidator";

export default class SemestresController {
    
    index(){
        
        return Semestre.query().preload('turma').paginate(1)
    }
 
    async store({request}){
        const dados = await request.validate(SemestreValidator)       
        return Semestre.create(dados)

    }
     
    async show({request}){
        const id = request.param('id')
        return await Semestre.findOrFail(id)
        
    }

    async destroy({request}){
        const id = request.param('id')
        const semestre = await Semestre.findOrFail(id)
        return semestre.delete()
    }

    async update({request}){
        const id = request.param('id')
        const semestre = await Semestre.findOrFail(id)
        const dados = request.only(["nome", "data_inicio", "data_fim"])
        semestre.merge(dados)
        return semestre.save()
    }

}
