import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronDown, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons'

const ResistorBand = () => {
  return (
    <div className=''>
      <FontAwesomeIcon icon={ faCircleChevronUp } className="cursor-pointer" /> 
      <div className="w-4 h-24 my-4 bg-primary border-black border-2"></div>
      <FontAwesomeIcon icon={ faCircleChevronDown } className="cursor-pointer" /> 
    </div>
  )
}

export default ResistorBand
