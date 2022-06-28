import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronDown, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons'
import { bandColors } from '../handlers/values'
import { FC } from 'react'
import { fiveBands, fourBands, sixBands } from '../handlers/calcResults'
import { stringify } from 'querystring'

type Props = {
  band: number,
  value: number,
  handleUp: (value:number) => void,
  handleDown: (value:number) => void
}

const ResistorBand:FC<Props> = ({ band, value, handleUp, handleDown }) => {

  const toggle4Bands = document.getElementById('first')?.checked
  const toggle5Bands = document.getElementById('second')?.checked
  const toggle6Bands = document.getElementById('third')?.checked

  if(toggle4Bands){
    var { color, nextColor, prevColor } = fourBands(band, value)
  } else if(toggle5Bands){
    fiveBands(band, value)
  } else if(toggle6Bands){
    sixBands(band, value)
  }
  
  return (
    <div className=''>
      <FontAwesomeIcon icon={ faCircleChevronUp } className="cursor-pointer" onClick={ () => handleUp(nextColor) } /> 
      <div className={`w-4 h-24 my-4 border-black border-2 ${ color }`}></div>
      <FontAwesomeIcon icon={ faCircleChevronDown } className="cursor-pointer" onClick={ () => handleDown(prevColor) } /> 
    </div>
  )
}

export default ResistorBand
