import './Input.scss'
import attach from '../../assets/svg/attach.svg'
import telegram from '../../assets/svg/telegram.svg'
import { useInput } from '../../hook/input'
import { useAppDispatch } from '../../hook/redux'
import { addNewMessage } from '../../store/slices/MessagesSlice'

export const Input = () => {
  const dispatch = useAppDispatch()
  const attachHandler = () => {}

  const inputMessage = useInput('')

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max)
  }
  function NowDate() {
    console.log()
    let date = new Date()
    return +date / 1000
  }

  const handleSaveMessage = (e: any) => {
    console.log(e)

    if (
      inputMessage.value.length > 0 &&
      (e.key === 'Enter' || e.type === 'click')
    ) {
      dispatch(
        addNewMessage({
          id: getRandomInt(99999999).toString(),
          created_at: NowDate(),
          user: {
            id: '',
            name: '',
            surname: '',
            avatar: '',
            you: true,
          },
          message: inputMessage.value,
          is_new: false,
        })
      )
      inputMessage.removeValue()
    }
  }
  return (
    <>
      <div className='input__content'>
        <input
          type='text'
          className='content__input'
          placeholder='Type messsage'
          value={inputMessage.value}
          onChange={(e) => inputMessage.onChange(e)}
          onKeyDown={(e) => handleSaveMessage(e)}
        />
        <div className='content__buttons'>
          <img
            src={attach}
            alt='button__attach'
            className='button__attach'
            onClick={attachHandler}
          />
          <img
            src={telegram}
            alt='button__telegram'
            className='button__telegram'
            onClick={(e) => handleSaveMessage(e)}
          />
        </div>
      </div>
    </>
  )
}
