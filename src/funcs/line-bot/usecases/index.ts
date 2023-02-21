import { WebhookEvent } from '@line/bot-sdk'

import { lineClient } from '~/clients/line.client'
import { errorLogger } from '~/utils/util'
import { msgError } from '~lineBot/notice-messages/other'

import { followUsecase } from './follow'
import { messagesUsecase } from './messages'

export const usecases = async (event: WebhookEvent): Promise<void> => {
  try {
    switch (event.type) {
      case 'follow':
        return await followUsecase(event)
      case 'message':
        return await messagesUsecase(event)
      default:
    }
  } catch (err) {
    lineClient.pushMessage(event.source.userId!, msgError).catch
    errorLogger(err)
    throw new Error('usecases')
  }
}
