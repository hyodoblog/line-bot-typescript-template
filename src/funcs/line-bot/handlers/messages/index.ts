import { MessageEvent } from '@line/bot-sdk'

import { lineClient } from '~/utils/line'
import { errorLogger } from '~/utils/util'
import { msgOther } from '~lineBot/notice-messages/other'

import { messageTextHandler } from './text'

export const messagesHandler = async (event: MessageEvent): Promise<void> => {
  try {
    switch (event.message.type) {
      case 'text':
        return await messageTextHandler(event)
      default:
        await lineClient.replyMessage(event.replyToken, msgOther)
    }
  } catch (err) {
    errorLogger(err)
    throw new Error('messages handler')
  }
}
