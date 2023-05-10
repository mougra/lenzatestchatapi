import React, { FC } from 'react'
import { IPage } from '../../interface/page'
import { Header } from '../../components/Header/Header'
import { Message } from '../../components/Message/Message'
import { useAppSelector } from '../../hook/redux'
import './index.scss'
import { Input } from '../../components/Input/Input'

export const PageIndex: FC<IPage> = (props: IPage) => {
  const { messageRoot } = useAppSelector((state) => state.messages)

  let is_newID = 0
  for (let i = messageRoot.length - 1; i > 0; i--) {
    if (messageRoot[i].is_new === true) {
      is_newID = messageRoot[i].created_at
    }
  }

  return (
    <div className='page-index__main'>
      <Header />
      <div className='page-index__messages'>
        {messageRoot.map((messageItem) => (
          <Message
            key={messageItem.id}
            created_at={messageItem.created_at}
            user={messageItem.user}
            message={messageItem.message}
            is_new={is_newID}
            lastCreatedAt={messageItem.created_at}
          />
        ))}
      </div>
      <Input />
    </div>
  )
}
