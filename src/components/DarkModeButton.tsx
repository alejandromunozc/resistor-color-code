import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const DarkModeButton = () => {
  return (
    <FontAwesomeIcon icon={ faSun } className="text-2xl text-yellow-400 animate-pulse cursor-pointer" />
  )
}

export default DarkModeButton
