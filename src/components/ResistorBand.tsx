import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronDown, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons'
import { bandColors } from '../handlers/values'
import { FC } from 'react'

type Props = {
  band: number,
  value: number,
  handleUp: (value:number) => void,
  handleDown: (value:number) => void
}

const ResistorBand:FC<Props> = ({ band, value, handleUp, handleDown }) => {
  
  return (
    <div className=''>
      <FontAwesomeIcon icon={ faCircleChevronUp } className="cursor-pointer" onClick={ () => handleUp(value >= 9 ? 0 : value + 1) } /> 
      <div className={`w-4 h-24 my-4 border-black border-2 ${ bandColors[value] }`}></div>
      <FontAwesomeIcon icon={ faCircleChevronDown } className="cursor-pointer" onClick={ () => handleDown(value <= 0 ? 9 : value - 1) } /> 
    </div>
  )
}

export default ResistorBand
