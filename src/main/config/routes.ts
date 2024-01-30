import { type Express, Router } from 'express'
import fg from 'fast-glob'
import path from 'path'
export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  fg.sync(path.join(__dirname, '../routes/**routes.??')).map(async file => (await import(file)).default(router))
}
