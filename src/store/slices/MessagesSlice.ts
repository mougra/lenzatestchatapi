import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ChatRootObject, MessageRootObject } from '../../interface/models'

interface MessageState {
  loadingMessage: boolean
  errorMessage: string
  messageRoot: MessageRootObject[]
  chatTitle: string
}

const initialState: MessageState = {
  loadingMessage: false,
  errorMessage: '',
  messageRoot: [],
  chatTitle: '',
}

export const MessageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    fetching(state) {
      state.loadingMessage = true
    },
    fetchSuccessMessage(state, action: PayloadAction<MessageRootObject[]>) {
      state.loadingMessage = false
      state.messageRoot = action.payload
      state.errorMessage = ''
    },
    chatTitle(state, action: PayloadAction<string>) {
      state.chatTitle = action.payload
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loadingMessage = false
      state.errorMessage = action.payload.message
    },
    addNewMessage(state, action: PayloadAction<MessageRootObject>) {
      state.messageRoot.unshift(action.payload)
    },
  },
})

export default MessageSlice.reducer
export const { addNewMessage } = MessageSlice.actions
