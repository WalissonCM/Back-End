import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Disciplina from 'App/Models/Disciplina'

export default class extends BaseSeeder {
  public async run () {
    await Disciplina.createMany([
      {nome: "Gestão", cursoId: 1},
      {nome: "Sistemas", cursoId: 2},
      {nome: "Matematica", cursoId: 3},
      {nome: "Quimica", cursoId: 4},
      {nome: "Dados", cursoId: 5},
      {nome: "Banco de Dados", cursoId: 6},
      {nome: "Matematica", cursoId: 7},
      {nome: "Economia", cursoId: 8},
      {nome: "Cinema", cursoId: 9},
      {nome: "Social", cursoId: 10},
      {nome: "Digital", cursoId: 11},
      {nome: "Propaganda", cursoId: 12},
      {nome: "Design", cursoId: 13},
      {nome: "Design", cursoId: 14},
      {nome: "Design", cursoId: 15},
      {nome: "leis", cursoId: 16},
      {nome: "Físico", cursoId: 17},
      {nome: "Biologia", cursoId: 18},
      {nome: "Matematica", cursoId: 19},
      {nome: "Engenharia", cursoId: 20},
      {nome: "Eletrica", cursoId: 21},
      {nome: "Moda", cursoId: 22},
      {nome: "Quimica", cursoId: 23},
      {nome: "Comida", cursoId: 24},
      {nome: "Jogos", cursoId: 25},
      {nome: "Nutrição", cursoId: 26},
      {nome: "Social", cursoId: 27},
      {nome: "Filosofia", cursoId: 28},
      {nome: "Redes", cursoId: 29},
      {nome: "Relações", cursoId: 30},
      {nome: "Informação", cursoId: 31},
      {nome: "Dança", cursoId: 32},
    ])
  }
}
