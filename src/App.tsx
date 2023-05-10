import Aside from './components/Aside'
import { PageIndex } from './pages/index'
import './style/App.scss'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './hook/redux'
import { fetchChat } from './store/actions/chatActions'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchChat())
  }, [dispatch])

  const { error, loading } = useAppSelector((state) => state.chat)

  return (
    <>
      {loading && <p className=''>Loading...</p>}
      {error && (
        <p className=''>Усп. Кажется что-то не так. Только без паники!</p>
      )}
      {!error && !loading && (
        <div className='App'>
          <div className='chat-list'>
            <h2 className='chat-list__title'>All chats</h2>
            <Aside />
          </div>
          <PageIndex />
        </div>
      )}
    </>
  )
}

export default App
