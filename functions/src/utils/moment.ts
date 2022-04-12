import moment from 'moment-timezone'

import 'moment/locale/ja'

moment.locale('ja')
moment.tz.setDefault('Asia/Tokyo')

export { moment }
