export interface ServerResponse<T> {
  response: T[]
}

export interface LastMessage {
  created_at: number
  user_id: string
  user_name: string
  user_surname: string
  you: boolean
  message: string
}

export interface User {
  id: string
  name: string
  surname: string
  avatar: string
  you: boolean
}

export interface ChatRootObject {
  id: string
  created_at: number
  title: string
  avatar: string
  private: boolean
  last_message: LastMessage
  count_unread: number
  users: User[]
}

export interface MessageUser {
  id: string
  name: string
  surname: string
  avatar: string
  you: boolean
}

export interface MessageRootObject {
  id: string
  created_at: number
  user: MessageUser
  message: string
  is_new: boolean
}
