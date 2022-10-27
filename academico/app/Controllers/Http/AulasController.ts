// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Aula from "App/Models/Aula"
import AulaValidator from "App/Validators/AulaValidator"

export default class AulasController {

    index(){
        return Aula.query().preload('turma')
                           .preload('chamada')
                           .paginate(1)
     }
 
    async store({request}){

        const dados = await request.validate(AulaValidator)
        return Aula.create(dados)

     }
     
    async show({request}){
        const id = request.param('id')
        return await Aula.findOrFail(id)
        
    }

    async destroy({request}){
        const id = request.param('id')
        const aula = await Aula.findOrFail(id)
        return aula.delete()
    }

    async update({request}){
        const id = request.param('id')
        const aula = await Aula.findOrFail(id)
        const dados = request.only(["data", "conteudo", "turma_id"])
        aula.merge(dados)
        return aula.save()
    }

}
