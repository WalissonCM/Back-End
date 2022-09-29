import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Personagem from 'App/Models/Personagem'

export default class extends BaseSeeder {
  public async run () {
 
    await Personagem.createMany([
      {nome:'Magman', classe:'Mago', forca: 6.00, inteligencia: 90, dtNascimento: new Date(2022,5,1)}
    ])

  
  }
}
