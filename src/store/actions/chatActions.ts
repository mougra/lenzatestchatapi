import { AppDispatch } from '..'
import axios from '../../api/chat/index'
import { MessageRootObject, ServerResponse } from '../../interface/models'
import { ChatRootObject } from '../../interface/models'
import { ChatSlice } from '../slices/ChatSlice'
import { fetchMessage } from './messageActions'

export const fetchChat = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(ChatSlice.actions.fetching())
      const responseChat = await axios.get<ServerResponse<ChatRootObject>>(
        'chat.get'
      )
      dispatch(ChatSlice.actions.fetchSuccessChat(responseChat.data.response))
      dispatch(ChatSlice.actions.chatTitle(responseChat.data.response[0].title))
      dispatch(
        fetchMessage(
          responseChat.data.response[0].id,
          responseChat.data.response[0].title
        )
      )
      console.log('fetchChat')
    } catch (e) {
      dispatch(ChatSlice.actions.fetchError(e as Error))
    }
  }
}

// export const fetchMessage = (chat_id: string = '', title: string = '') => {
//   return async (dispatch: AppDispatch) => {
//     try {
//       const responseMessage = await axios.get<
//         ServerResponse<MessageRootObject>
//       >('message.get', {
//         params: { chat_id },
//       })
//       console.log('fetchMessage')

//       dispatch(
//         ChatSlice.actions.fetchSuccessMessage(responseMessage.data.response)
//       )
//       dispatch(ChatSlice.actions.chatTitle(title))
//     } catch (e) {
//       dispatch(ChatSlice.actions.fetchError(e as Error))
//     }
//   }
// }
