// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Turma from "App/Models/Turma";
import TurmaValidator from "App/Validators/TurmaValidator";

export default class TurmasController {
    
    index(){
        return Turma.query().preload('semestre')
                            .preload('sala')
                            .preload('disciplina')
                            .preload('professor')
                            .preload('aluno')
                            .preload('aula')
                            .paginate(1)
     }
 
    async store({request}){
        const dados = await request.validate(TurmaValidator)
        return Turma.create(dados)

     }
     
    async show({request}){
        const id = request.param('id')
        return await Turma.findOrFail(id)
        
    }

    async destroy({request}){
        const id = request.param('id')
        const turma = await Turma.findOrFail(id)
        return turma.delete()
    }

    async update({request}){
        const id = request.param('id')
        const turma = await Turma.findOrFail(id)
        const dados = request.only(["nome", "professor_id", "semestre_id", "disciplina_id", "sala_id", "turno"])
        turma.merge(dados)
        return turma.save()
    }

}
