import { combineReducers, configureStore } from '@reduxjs/toolkit'
import chatReducer from './slices/ChatSlice'
import messagesReducer from './slices/MessagesSlice'

const rootReducer = combineReducers({
  chat: chatReducer,
  messages: messagesReducer,
})

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
