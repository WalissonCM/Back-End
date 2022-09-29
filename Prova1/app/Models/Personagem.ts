import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Personagem extends BaseModel {
 
 public static table = 'personagens'
 
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string
  
  @column()
  public classe: string

  @column()
  public forca: number
  
  @column()
  public inteligencia: number
  
  @column()
  public dtNascimento: Date

  



  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
