import express from 'express'
import notesRoutes from './api/notes.route'

const routes = express.Router()

routes.use('/notes', notesRoutes)

export default routes
