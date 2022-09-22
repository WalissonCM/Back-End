import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Conta extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public tipo: string
  
  @column()
  public banco: string
  @column()
  public agencia: string
  
  @column()
  public saldo: number
  
  @column()
  public data_criacao: Date

  @column()
  public cliente_id: number


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
