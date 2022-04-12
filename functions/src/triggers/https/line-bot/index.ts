import { middleware } from '@line/bot-sdk'
import { logger, region, RuntimeOptions } from 'firebase-functions'
import express from 'express'
import { lineMiddlewareConfig } from '~/utils/line'
import { errorLogger } from '~/utils/util'
import { handlers } from './handlers'

const app = express()

app.use(middleware(lineMiddlewareConfig))
app.post('/', (req, res) =>
  Promise.all(req.body.events.map(handlers))
    .then((result) => {
      logger.info(result)
      res.status(200).end()
    })
    .catch((err) => {
      errorLogger(err)
      res.status(500).end()
    })
)

// *************
// Functions設定

const runtimeOpts: RuntimeOptions = {
  timeoutSeconds: 540,
  memory: '1GB'
}

module.exports = region('asia-northeast1').runWith(runtimeOpts).https.onRequest(app)
