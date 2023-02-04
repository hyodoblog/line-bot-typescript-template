import { MessageEvent, TextEventMessage } from '@line/bot-sdk'

import { lineClient, makeReplyMessage } from '~/utils/line'
import { errorLogger } from '~/utils/util'

// *********
// main関数
// *********

export const messageTextHandler = async (event: MessageEvent): Promise<void> => {
  try {
    const { text } = event.message as TextEventMessage

    await lineClient.replyMessage(event.replyToken, makeReplyMessage(text))
  } catch (err) {
    errorLogger(err)
    throw new Error('message text handler')
  }
}
