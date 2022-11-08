// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Chamada from "App/Models/Chamada";
import ChamadaValidator from "App/Validators/ChamadaValidator";

export default class ChamadasController {

    index(){
        return Chamada.query().preload('aula')
                              .preload('aluno')
                              .paginate(1)
     }
 
    async store({request}){
        const dados = await request.validate(ChamadaValidator)
        return Chamada.create(dados)

     }
     
    async show({request}){
        const id = request.param('id')
        return await Chamada.findOrFail(id)
        
    }

    async destroy({request}){
        const id = request.param('id')
        const chamada = await Chamada.findOrFail(id)
        return chamada.delete()
    }

    async update({request}){
        const id = request.param('id')
        const chamada = await Chamada.findOrFail(id)
        const dados = request.only(["aula_id", "aluno_id", "presenca"])
        chamada.merge(dados)
        return chamada.save()
    }

}
