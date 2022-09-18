import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Professor from 'App/Models/Professor'

export default class extends BaseSeeder {
  public async run () {
    await Professor.createMany([
      {nome: "Alex", cpf: 78945612300, matricula: "2087432165", salario: "R$10.000", email: "Alex@gmail.com", telefone: "61-40028922",
       cep: 72250300, logadouro: "qnq05", complemento: "Cas", numero: "30", bairro: "Ceilandia"},
      {nome: "Carlos", cpf: 78945612301, matricula: "187432165", salario: "R$10.000", email: "Carlos@gmail.com", telefone: "61-61-40028925",
       cep: 72430260, logadouro: "Quadra 3 Área D", complemento: "Apt", numero: "12", bairro: "Gama"},
      {nome: "Matheus", cpf: 78945612302, matricula: "1587432165", salario: "R$10.000", email: "Matheus@gmail.com", telefone: "61-40028929",
       cep: 70330515, logadouro: "Quadra CLS 102 Bloco A", complemento: "Apt", numero: "44", bairro: "Asa Sul"},
      {nome: "Barbara", cpf: 78945612303, matricula: "1287432165", salario: "R$10.000", email: "Barbara@gmail.com", telefone: "61-40028927",
       cep: 71070700, logadouro: "Área Especial 10", complemento: "Cas", numero: "6", bairro: "Tagutainga"},
      {nome: "Camila", cpf: 78945612305, matricula: "9287432165", salario: "R$10.000", email: "Camila@gmail.com", telefone: "61-40028924",
       cep: 70297-400, logadouro: "Quadra 101", complemento: "Cond", numero: "25", bairro: "Aguas Claras"},
    ])
  }
}
