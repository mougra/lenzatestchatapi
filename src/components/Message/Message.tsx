import './Message.scss'

import { MessageUser } from '../../interface/models'
import { Avatar } from '../Avatar'
import { Time } from '../Time/time'
import { SystemNewMessage } from '../SystemNewMessage/SystemNewMessage'
import { useState } from 'react'

interface MessageProps {
  created_at: number
  user: MessageUser
  message: string
  is_new: number
  lastCreatedAt: number
}

export const Message = ({
  created_at,
  user,
  message,
  is_new,
  lastCreatedAt,
}: MessageProps) => {
  const [isNewMessage, setIsNewMessage] = useState(is_new === created_at)

  function HandlerDeleteNewMessage(e: any) {
    setIsNewMessage(false)
  }
  return (
    <>
      <div
        className={
          !user.you
            ? 'message__container message__not-you'
            : 'message__container message__you'
        }
        onMouseOver={HandlerDeleteNewMessage}
      >
        {!user.you && <Avatar src={user.avatar} />}
        <div className='message__content'>
          {!user.you && (
            <div className='message__content__name'>{user.name}</div>
          )}
          <div className='message__text'>
            {message}
            <Time My={!user.you} lastCreatedAt={lastCreatedAt} />
          </div>
        </div>
      </div>
      {isNewMessage && <SystemNewMessage />}
    </>
  )
}
