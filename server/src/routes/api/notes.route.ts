import { Request, Response, Router } from 'express'
import NoteModel from '../../models/note.model'

const noteModel = new NoteModel()

const routes = Router()

routes.get('/', async (_: Request, res: Response) => {
  try {
    const notes = await noteModel.index()
    res.json({
      status: 'success',
      message: 'Notes retrieved successfully',
      data: notes
    })
  } catch (error) {
    throw new Error(`Error ${(error as unknown as Error).message}`)
  }
})

export default routes
