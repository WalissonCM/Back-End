import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Curso from 'App/Models/Curso'

export default class extends BaseSeeder {
  public async run () {
    await Curso.createMany([
      {nome: "Administração", duracao: 8, modalidade: "P"},
      {nome: "Analise e Desenvolvimento de Sistemas", duracao: 5, modalidade: "P"},
      {nome: "Arquitetura e Urbanismo", duracao: 10, modalidade: "P"},
      {nome: "Biomedicina", duracao: 8, modalidade: "P"},
      {nome: "Ciência de Dados e Inteligência Artificial", duracao:8, modalidade: "P"},
      {nome: "Ciência da Computação", duracao: 8, modalidade: "P"},
      {nome: "Ciências Contábeis", duracao: 8, modalidade: "P"},
      {nome: "Ciências Econômicas", duracao: 8, modalidade: "P"},
      {nome: "Cinema e Mídias Digitais", duracao: 8, modalidade: "P"},
      {nome: "Ciências Social", duracao: 8, modalidade: "P"},
      {nome: "Jornalismo", duracao: 8, modalidade: "P"},
      {nome: "Publicidade e Propaganda", duracao: 8, modalidade: "P"},
      {nome: "Design de Interiores", duracao: 4, modalidade: "P"},
      {nome: "Design de Moda", duracao: 4, modalidade: "P"},
      {nome: "Design Gráfico", duracao: 4, modalidade: "P"},
      {nome: "Direito", duracao: 10, modalidade: "P"},
      {nome: "Educação Física", duracao: 8, modalidade: "P"},
      {nome: "Enfermagem", duracao: 10, modalidade: "P"},
      {nome: "Engenharia Civil", duracao: 10, modalidade: "P"},
      {nome: "Engenharia da Computação", duracao: 9, modalidade: "P"},
      {nome: "Engenharia Elétrica ", duracao: 10, modalidade: "P"},
      {nome: "Estética e Cosmética", duracao: 5, modalidade: "P"},
      {nome: "Farmácia", duracao: 10, modalidade: "P"},
      {nome: "Gastronomia", duracao: 4, modalidade: "P"},
      {nome: "Jogos Digitais", duracao: 6, modalidade: "P"},
      {nome: "Nutrição", duracao: 8, modalidade: "P"},
      {nome: "Pedagogia", duracao: 8, modalidade: "P"},
      {nome: "Psicologia", duracao: 10, modalidade: "P"},
      {nome: "Redes de Computadores", duracao: 5, modalidade: "EAD"},
      {nome: "Relações Internacionais", duracao: 8, modalidade: "P"},
      {nome: "Sistema da Informação", duracao: 5, modalidade: "EAD"},
      {nome: "Teatro", duracao: 8, modalidade: "P"},
    ])
  }
}
