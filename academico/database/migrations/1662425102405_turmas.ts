import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'turmas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 50).notNullable()
      table.integer('professor_id').unsigned().references('id').inTable('professors')
      table.integer('semestre_id').unsigned().references('id').inTable('semestres')
      table.integer('disciplina_id').unsigned().references('id').inTable('disciplinas')
      table.integer('sala_id').unsigned().references('id').inTable('salas')
      table.string('turno', 1).notNullable()


      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
