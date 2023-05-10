import './header.scss'
import { useAppSelector } from '../../hook/redux'
import ChatSVG from '../../assets/svg/Chat.svg'

export const Header = () => {
  const { chatTitle } = useAppSelector((state) => state.messages)

  return (
    <>
      <div className='header-message'>
        <img
          src={ChatSVG}
          alt='header-message'
          className='header-message__img'
        />
        <div className='header-message__title'> {chatTitle}</div>
      </div>
    </>
  )
}
