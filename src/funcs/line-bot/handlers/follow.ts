import { FollowEvent } from '@line/bot-sdk'

import { lineClient } from '~/utils/line'
import { msgFollow } from '~lineBot/notice-messages/follow'

export const followHandler = async (event: FollowEvent): Promise<void> => {
  await lineClient.replyMessage(event.replyToken, msgFollow)
}
