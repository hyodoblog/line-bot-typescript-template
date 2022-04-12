import { join } from 'path'
import moduleAlias from 'module-alias'

moduleAlias.addAliases({
  '~': join(__dirname, './'),
  '~line': join(__dirname, './triggers/https/line-bot')
})
