import { wrapper } from '../../utils/wrapper'
import { URLS } from '../../constants/urls'
import axios from 'axios'

export const getChatList = () => {
  return wrapper('get', URLS.LIST)
}
export const getMessageList = () => {
  return wrapper('get', URLS.MESSAGES)
}

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})
