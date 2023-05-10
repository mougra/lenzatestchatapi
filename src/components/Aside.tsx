import ChatItemList from './ChatItemList'
import { useAppSelector } from '../hook/redux'
import '../style/Aside.scss'

function Aside() {
  const { chatRoot } = useAppSelector((state) => state.chat)

  return (
    <>
      <div className='aside-navigation'>
        {chatRoot.map((chatItem) => (
          <ChatItemList
            key={chatItem.id}
            chat_id={chatItem.id}
            avatar={chatItem.avatar}
            title={chatItem.title}
            lastMessage={chatItem.last_message.message}
            lastCreatedAt={chatItem.last_message.created_at}
          />
        ))}
      </div>
    </>
  )
}

export default Aside
