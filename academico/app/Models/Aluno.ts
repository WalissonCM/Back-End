import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Chamada from './Chamada'
import Turma from './Turma'

export default class Aluno extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public cpf: number

  @column()
  public matricula: string

  @column()
  public email: string

  @column()
  public telefone: string

  @column()
  public cep: number

  @column()
  public logadouro: string

  @column()
  public complemento: string

  @column()
  public numero: string

  @column()
  public bairro: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(()=>Chamada)
  public chamada: HasMany<typeof Chamada>

  @manyToMany(()=>Turma, {pivotTable: 'turma_alunos'})
  public turma: ManyToMany<typeof Turma>

}
