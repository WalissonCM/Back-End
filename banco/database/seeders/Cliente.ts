import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cliente from 'App/Models/Cliente'

export default class extends BaseSeeder {
  public async run () {
    await Cliente.createMany([
      {nome: "Adecio", telefone: "(61) 98153-82976", cep: "72.400-607", endereco:"Ceinadia", cpf:"700.200.500-11" , salario:10000 , dataNascimento: new Date (2020-7-1)},
    
    ])
    
  }
}
