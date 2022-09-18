import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Semestre from 'App/Models/Semestre'

export default class extends BaseSeeder {
  public async run () {
    await Semestre.createMany([
      {nome: "Administração", dataInicio: new Date(Date.UTC(2022, 2, 10)), dataFim: new Date(Date.UTC(2025, 12, 15))},
      {nome: "Análise e Desenvolvimento de Sistemas", dataInicio: new Date(Date.UTC(2022, 2, 10)), dataFim: new Date(Date.UTC(2024, 6, 15))},
      {nome: "Arquitetura e Urbanismo", dataInicio: new Date(Date.UTC(2022, 2, 10)), dataFim: new Date(Date.UTC(2026, 12, 15))},
      {nome: "Biomedicina", dataInicio: new Date(Date.UTC(2022, 2, 10)), dataFim: new Date(Date.UTC(2025, 12, 15))},
      {nome: "Ciência de Dados e Inteligência Artificial", dataInicio: new Date(Date.UTC(2022, 2, 10)), dataFim: new Date(Date.UTC(2025, 12, 15))},
      {nome: "Ciência da Computação", dataInicio: new Date(Date.UTC(2022, 2, 10)), dataFim: new Date(Date.UTC(2025, 12, 15))},
      {nome: "Ciências Contábeis", dataInicio: new Date(Date.UTC(2022, 2, 10)), dataFim: new Date(Date.UTC(2025, 12, 15))},
      {nome: "Ciências Econômicas", dataInicio: new Date(Date.UTC(2022, 2, 10)), dataFim: new Date(Date.UTC(2025, 12, 15))},
      {nome: "Ciências Sociais", dataInicio: new Date(Date.UTC(2022, 2, 10)), dataFim: new Date(Date.UTC(2025, 12, 15))},
      {nome: "Cinema e Mídias Digitais", dataInicio: new Date(Date.UTC(2022, 2, 10)), dataFim: new Date(Date.UTC(2025, 12, 15))},
      {nome: "Jornalismo", dataInicio: new Date(Date.UTC(2022, 2, 10)), dataFim: new Date(Date.UTC(2025, 12, 15))},
      {nome: "Publicidade e Propaganda", dataInicio: new Date(Date.UTC(2022, 2, 10)), dataFim: new Date(Date.UTC(2025, 12, 15))},
      {nome: "Design de Interiores", dataInicio: new Date(Date.UTC(2022, 2, 10)), dataFim: new Date(Date.UTC(2023, 12, 15))},
      {nome: "Design de Moda", dataInicio: new Date(Date.UTC(2022, 2, 10)), dataFim: new Date(Date.UTC(2023, 12, 15))},
      {nome: "Design Gráfico", dataInicio: new Date(Date.UTC(2022, 2, 10)), dataFim: new Date(Date.UTC(2023, 12, 15))},
      {nome: "Direito", dataInicio: new Date(Date.UTC(2022, 2, 10)), dataFim: new Date(Date.UTC(2026, 12, 15))},
      {nome: "Educação Física", dataInicio: new Date(Date.UTC(2022, 2, 10)), dataFim: new Date(Date.UTC(2025, 12, 15))},
      {nome: "Enfermagem", dataInicio: new Date(Date.UTC(2022, 2, 10)), dataFim: new Date(Date.UTC(2026, 12, 15))},
      {nome: "Engenharia Civil", dataInicio: new Date(Date.UTC(2022, 2, 10)), dataFim: new Date(Date.UTC(2026, 12, 15))},
      {nome: "Engenharia da Computação", dataInicio: new Date(Date.UTC(2022, 2, 10)), dataFim: new Date(Date.UTC(2025, 6, 15))},
      {nome: "Engenharia Elétrica", dataInicio: new Date(Date.UTC(2022, 2, 10)), dataFim: new Date(Date.UTC(2026, 12, 15))},
      {nome: "Estética e Cosmética", dataInicio: new Date(Date.UTC(2022, 2, 10)), dataFim: new Date(Date.UTC(2024, 6, 15))},
      {nome: "Farmácia", dataInicio: new Date(Date.UTC(2022, 2, 10)), dataFim: new Date(Date.UTC(2026, 12, 15))},
      {nome: "Gastronomia", dataInicio: new Date(Date.UTC(2022, 2, 10)), dataFim: new Date(Date.UTC(2023, 12, 15))},
      {nome: "Jogos Digitais", dataInicio: new Date(Date.UTC(2022, 2, 10)), dataFim: new Date(Date.UTC(2024, 12, 15))},
      {nome: "Nutrição", dataInicio: new Date(Date.UTC(2022, 2, 10)), dataFim: new Date(Date.UTC(2025, 12, 15))},
      {nome: "Pedagogia", dataInicio: new Date(Date.UTC(2022, 2, 10)), dataFim: new Date(Date.UTC(2025, 12, 15))},
      {nome: "Psicologia", dataInicio: new Date(Date.UTC(2022, 2, 10)), dataFim: new Date(Date.UTC(2026, 12, 15))},
      {nome: "Redes de Computadores ", dataInicio: new Date(Date.UTC(2022, 2, 10)), dataFim: new Date(Date.UTC(2024, 6, 15))},
      {nome: "Relações Internacionais", dataInicio: new Date(Date.UTC(2022, 2, 10)), dataFim: new Date(Date.UTC(2025, 12, 15))},
      {nome: "Sistema da Informação", dataInicio: new Date(Date.UTC(2022, 2, 10)), dataFim: new Date(Date.UTC(2024, 6, 15))},
      {nome: "Teatro", dataInicio: new Date(Date.UTC(2022, 2, 10)), dataFim: new Date(Date.UTC(2025, 12, 15))},

      
    ])
  }
}
