import { FlexMessage, TextMessage } from '@line/bot-sdk'

export const msgOther: TextMessage = {
  type: 'text',
  text: 'テキスト以外のメッセージを受信しました'
}

export const msgError: FlexMessage = {
  type: 'flex',
  altText: 'エラーが発生しました',
  contents: {
    type: 'bubble',
    direction: 'ltr',
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: 'エラーが発生しました',
          align: 'start',
          wrap: true
        }
      ]
    },
    footer: {
      type: 'box',
      layout: 'horizontal',
      contents: [
        {
          type: 'button',
          action: {
            type: 'uri',
            label: '報告する',
            uri: 'https://twitter.com/hyodoblog'
          },
          style: 'primary'
        }
      ]
    }
  }
}
