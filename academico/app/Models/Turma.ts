import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Professor from './Professor'
import Semestre from './Semestre'
import Sala from './Sala'
import Disciplina from './Disciplina'
import TurmaAluno from './TurmaAluno'
import Aula from './Aula'

export default class Turma extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public professorId: number

  @column()
  public semestreId: number

  @column()
  public disciplinaId: number

  @column()
  public salaId: number

  @column()
  public turno: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(()=>Semestre)
  public semestre: BelongsTo<typeof Semestre>

  @belongsTo(()=>Sala)
  public Sala: BelongsTo<typeof Sala>

  @belongsTo(()=>Disciplina)
  public disciplina: BelongsTo<typeof Disciplina>

  @belongsTo(()=>Professor)
  public professor: BelongsTo<typeof Professor>

  @hasMany(()=>TurmaAluno)
  public turmaAluno: HasMany<typeof TurmaAluno>

  @hasMany(()=>Aula)
  public aula: HasMany<typeof Aula>

}
