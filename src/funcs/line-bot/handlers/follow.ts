import { FollowEvent } from '@line/bot-sdk'

import { lineClient } from '~/clients/line.client'
import { msgFollow } from '~lineBot/notice-messages/follow'

export const followHandler = async (event: FollowEvent): Promise<void> => {
  await lineClient.replyMessage(event.replyToken, msgFollow)
}
