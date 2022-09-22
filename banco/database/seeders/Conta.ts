import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Conta from 'App/Models/Conta'

export default class extends BaseSeeder {
  public async run () {
    await Conta.createMany([
      {tipo: "C", banco: "1", agencia: "000-7", saldo:10000, cliente_id:1, data_criacao: new Date ('2020-7-1')},/* (2020, 07, 01)*/

    
    ])
  }
}
