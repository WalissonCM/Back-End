// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Disciplina from "App/Models/Disciplina";

export default class DisciplinasController {

    index(){
       /*pesquisas: .all, .query().were('id','nome', 'curso_id), / .query().select(['id','nome', 'curso_id'])
       / .query().ordebay() / .query().paginate() */ 
        
        
        return Disciplina.query().preload('curso').paginate(1)
     }
 
    store({request}){

        const dados = request.only(["nome", "cursos_id"])
        return Disciplina.create(dados)

     }
     
    async show({request}){
        const id = request.param('id')
        return await Disciplina.findOrFail(id)
        
    }

    async destroy({request}){
        const id = request.param('id')
        const disciplina = await Disciplina.findOrFail(id)
        return disciplina.delete()
    }

    async update({request}){
        const id = request.param('id')
        const disciplina = await Disciplina.findOrFail(id)
        const dados = request.only(["nome", "cursos_id"])
        disciplina.merge(dados)
        return disciplina.save()
    }

}
