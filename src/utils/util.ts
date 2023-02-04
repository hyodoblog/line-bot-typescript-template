import { logger } from 'firebase-functions'

export const errorLogger = (err: any) => {
  if (err?.originalError?.response?.data)
    logger.error(JSON.stringify(err.originalError.response.data))
  else if (err instanceof Error) logger.error(err.message)
  else logger.error(err)
}
