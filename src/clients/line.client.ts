import { Client, ClientConfig, MiddlewareConfig } from '@line/bot-sdk'

import { LINE_ACCESS_TOKEN, LINE_SECRET } from '../utils/secrets'

export const lineMiddlewareConfig: MiddlewareConfig = {
  channelSecret: LINE_SECRET
}

export const lineConfig: ClientConfig = {
  ...lineMiddlewareConfig,
  channelAccessToken: LINE_ACCESS_TOKEN
}

export const lineClient = new Client(lineConfig)
