import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronDown, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons'
import { bandColors, valueBandColors } from '../handlers/values'
import { FC } from 'react'

type Props = {
  band: number,
  value: number,
  handleUp: (value:number) => void
}

const ResistorBand:FC<Props> = ({ band, value, handleUp }) => {

  /* const handleUp = (band:Number) => {
    console.log(band)
  } */

  const handleDown = (band:Number) => {
    console.log(band)
  }


  return (
    <div className=''>
      <FontAwesomeIcon icon={ faCircleChevronUp } className="cursor-pointer" onClick={ () => handleUp(value+1) } /> 
      <div className={`w-4 h-24 my-4 border-black border-2 ${ bandColors[value] }`}></div>
      <FontAwesomeIcon icon={ faCircleChevronDown } className="cursor-pointer" onClick={ () => handleDown(band) } /> 
    </div>
  )
}

export default ResistorBand
