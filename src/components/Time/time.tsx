import ViewedSVG from '../../assets/svg/Vector.svg'

interface TimeProps {
  My?: boolean
  lastCreatedAt: number
}

export const Time = (Props: TimeProps) => {
  let data = new Date(Props.lastCreatedAt * 1000)
  let dataCurrect =
    data.getHours() +
    ':' +
    (data.getMinutes().toString().length < 2
      ? '0' + data.getMinutes()
      : data.getMinutes())
  return (
    <>
      <div className='time'>
        <div>{dataCurrect}</div>
        {!Props.My && (
          <img src={ViewedSVG} alt='ViewedSVG' className='time--viewed__svg' />
        )}
      </div>
    </>
  )
}
