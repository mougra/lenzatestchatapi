import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ChatRootObject, MessageRootObject } from '../../interface/models'

interface ChatState {
  loading: boolean
  error: string
  chatRoot: ChatRootObject[]
  // messageRoot: MessageRootObject[]
  chatTitle: string
}

const initialState: ChatState = {
  loading: false,
  error: '',
  chatRoot: [],
  // messageRoot: [],
  chatTitle: '',
}

export const ChatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true
    },
    fetchSuccessChat(state, action: PayloadAction<ChatRootObject[]>) {
      state.loading = false
      state.chatRoot = action.payload
      state.error = ''
    },
    // fetchSuccessMessage(state, action: PayloadAction<MessageRootObject[]>) {
    //   state.messageRoot = action.payload
    // },
    chatTitle(state, action: PayloadAction<string>) {
      state.chatTitle = action.payload
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false
      state.error = action.payload.message
    },
    // addNewMessage(state, action: PayloadAction<MessageRootObject>) {
    //   state.messageRoot.unshift(action.payload)
    // },
  },
})

export default ChatSlice.reducer
// export const { addNewMessage } = ChatSlice.actions
