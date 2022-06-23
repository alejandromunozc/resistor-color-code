import Logo from './Logo'
import DarkModeButton from './DarkModeButton'

const Header = () => {
  return (
    <>
        <div className='w-full h-16 flex flex-wrap items-center justify-center gap-x-2'>
            <div className="grow text-center"></div>
            <Logo />
            <div className="grow text-center">
                <DarkModeButton />
            </div>
        </div>
        <hr />
    </>
  )
}

export default Header
