import express from 'express'
import setupMiddlewares from './middlewares'
import setupRoutes from './routes'

const app = express()
setupMiddlewares(app)
// eslint-disable-next-line @typescript-eslint/no-floating-promises
setupRoutes(app)

export default app
