import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronDown, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons'
import { bandColors } from '../handlers/values'

type Props = {
  band: number,
  color: string
}

const ResistorBand = ({band, color}: Props) => {

  const handleUp = (band:Number) => {
    console.log(band)
  }

  const handleDown = (band:Number) => {
    console.log(band)
  }

  return (
    <div className=''>
      <FontAwesomeIcon icon={ faCircleChevronUp } className="cursor-pointer" onClick={ () => handleUp(band) } /> 
      <div className={`w-4 h-24 my-4 border-black border-2 ${ color }`}></div>
      <FontAwesomeIcon icon={ faCircleChevronDown } className="cursor-pointer" onClick={ () => handleDown(band) } /> 
    </div>
  )
}

export default ResistorBand
