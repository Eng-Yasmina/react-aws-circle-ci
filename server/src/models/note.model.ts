import db from '../database'
import Note from '../types/note.type'

class NoteModel {
  async index(): Promise<Note[]> {
    try {
      const connection = await db.connect()
      const sql = 'SELECT * FROM notes'
      const result = await connection.query(sql)
      connection.release()
      return result.rows
    } catch (err) {
      throw new Error(`Error at retrieving Notes ${(err as Error).message}`)
    }
  }
}

export default NoteModel
