import { AppDispatch } from '..'
import axios from '../../api/chat/index'
import { MessageRootObject, ServerResponse } from '../../interface/models'
import { MessageSlice } from '../slices/MessagesSlice'

export const fetchMessage = (chat_id: string = '', title: string = '') => {
  return async (dispatch: AppDispatch) => {
    try {
      const responseMessage = await axios.get<
        ServerResponse<MessageRootObject>
      >('message.get', {
        params: { chat_id },
      })
      console.log('fetchMessage')

      dispatch(
        MessageSlice.actions.fetchSuccessMessage(responseMessage.data.response)
      )
      dispatch(MessageSlice.actions.chatTitle(title))
    } catch (e) {
      dispatch(MessageSlice.actions.fetchError(e as Error))
    }
  }
}
