import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Turma from 'App/Models/Turma'

export default class extends BaseSeeder {
  public async run () {
    await Turma.createMany([
      {nome: "Diabinhos", professorId: 1, semestreId: 1, disciplinaId: 1, salaId: 1, turno: "V"},
      {nome: "Anjinhos", professorId: 1, semestreId: 1, disciplinaId:2, salaId: 2, turno: "M"},
      {nome: "Diabinhos", professorId: 2, semestreId: 1, disciplinaId: 3, salaId: 3, turno: "V"},
      {nome: "Anjinhos", professorId: 2, semestreId: 1, disciplinaId: 4, salaId: 4, turno: "M"},
    ])
  }
}
