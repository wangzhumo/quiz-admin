import { createIntl, createIntlCache } from 'react-intl'
import ZH from './zh.json'
import EN from './en.json'
import MessageKeys from './keys.json'

const _currentLocale = 'en-US'
const messages = {
  'zh-CN': ZH,
  'en-US': EN
}

export const getCurrentLocale = () => _currentLocale
export const getCurrentMessages = () => messages[_currentLocale]
export { MessageKeys }

const cache = createIntlCache()
const intl = createIntl(
  {
    locale: _currentLocale,
    messages: getCurrentMessages()
  },
  cache
)

export default intl
