import { Message } from '@line/bot-sdk'

export const makeReplyMessage = (text: string): Message => {
  return {
    type: 'text',
    text: text.replace(/<br>/g, '\n')
  }
}
