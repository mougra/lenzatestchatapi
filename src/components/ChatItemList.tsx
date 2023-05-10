import '../style/ChatItemList.scss'
import { Avatar } from './Avatar/index'
import { useAppDispatch, useAppSelector } from '../hook/redux'
import { fetchMessage } from '../store/actions/messageActions'
import { Time } from './Time/time'

interface ChatItemListProps {
  chat_id: string
  title: string
  avatar: string
  lastMessage: string
  lastCreatedAt: number
}

function ChatItemList({
  chat_id,
  title,
  avatar,
  lastMessage,
  lastCreatedAt,
}: ChatItemListProps) {
  const dispatch = useAppDispatch()
  const { chatTitle } = useAppSelector((state) => state.messages)

  function clickHandler() {
    dispatch(fetchMessage(chat_id, title))
  }

  return (
    <div
      className={
        title === chatTitle
          ? 'chat-item-list chat-item-list__active'
          : 'chat-item-list'
      }
      onClick={clickHandler}
    >
      <div>
        <div className='chat-item-list__container'>
          <Avatar src={avatar} size='md' />
          <div className='chat-item-list__message'>
            <div className='chat-item-list__title-and-time'>
              <div className='chat-item-list-title'>{title}</div>
              <Time lastCreatedAt={lastCreatedAt} />
            </div>
            <div className='chat-item-list__message'>{lastMessage}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatItemList
