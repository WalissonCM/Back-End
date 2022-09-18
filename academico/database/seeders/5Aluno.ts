import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aluno from 'App/Models/Aluno'

export default class extends BaseSeeder {
  public async run () {
    await Aluno.createMany([
      {nome: "Alisson", cpf: 35149863200, matricula: "922100289", email: "Alisson@outlook.com", telefone: "61-33725637",
       cep: 72210-502, logadouro: "CNM 2", complemento: "Cas", numero: "65B", bairro: "Ceilandia"},
      {nome: "Davi", cpf: 35149863201, matricula: "925100289", email: "Davi@outlook.com", telefone: "61-33745638",
       cep: 72210-542, logadouro: "CNR 1", complemento: "Cas", numero: "2A", bairro: "Ceilandia"},
      {nome: "Luis", cpf: 35149863202, matricula: "926100289", email: "Luis@outlook.com", telefone: "61-32745637",
       cep: 72215-523, logadouro: "EQNM 6", complemento: "Apt", numero: "10C", bairro: "Ceilandia"},
      {nome: "Ronaldi", cpf: 35149863203, matricula: "928100289", email: "Ronaldi@outlook.com", telefone: "61-31745637",
       cep: 72255-545, logadouro: "EQNO 11/14", complemento: "Cas", numero: "15b", bairro: "Ceilandia"},
      {nome: "Lucas", cpf: 35149863204, matricula: "927100289", email: "Lucas@outlook.com", telefone: "61-33745537",
       cep: 72252-500, logadouro: "EQNP 9", complemento: "Apt", numero: "40A", bairro: "Ceilandia"},
      {nome: "Maria", cpf: 35149863205, matricula: "921100289", email: "Maria@outlook.com", telefone: "61-33745647",
       cep: 72265-501, logadouro: "QCS 19", complemento: "Apt", numero: "55B", bairro: "Ceilandia"},
      {nome: "Gabriel", cpf: 35149863206, matricula: "924600289", email: "Gabriel@outlook.com", telefone: "61-33795637",
       cep: 72220-080, logadouro: "QNM 8", complemento: "Cas", numero: "33C", bairro: "Ceilandia"},
      {nome: "Naiara", cpf: 35149863207, matricula: "980100289", email: "Naiara@outlook.com", telefone: "61-33745617",
       cep: 72255-304, logadouro: "QNO 13", complemento: "Cond", numero: "29A", bairro: "Ceilandia"},
      {nome: "Vitor", cpf: 35149863208, matricula: "970100289", email: "Vitor@outlook.com", telefone: "61-33745690",
       cep: 72231-101, logadouro: "QNP 10", complemento: "Apt", numero: "11A", bairro: "Ceilandia"},
      {nome: "Monica", cpf: 35149863209, matricula: "950100289", email: "Monica@outlook.com", telefone: "61-337456312",
       cep: 72270-302, logadouro: "QNQ 3", complemento: "Cond", numero: "6B", bairro: "Ceilandia"},
    ])
  }
}
