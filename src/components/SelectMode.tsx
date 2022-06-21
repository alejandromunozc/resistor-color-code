import React from 'react'

const SelectMode = () => {
    return (
        <div className="w-full h-16 flex flex-wrap items-center justify-center gap-x-2 mt-4">
                <div className='grow text-right px-10'>Colores a Ω</div>
                <div className="text-center">
                    <div className="form-check form-switch">
                        <input 
                            className="form-check-input appearance-none w-16 -ml-16 rounded-full h-8 align-top bg-white bg-no-repeat bg-contain bg-primary focus:outline-none cursor-pointer shadow-sm checked:bg-primary"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                        />
                    </div>
                </div>
                <div className='grow text-left px-4'>Ω a Colores</div>
                {/* <label className="form-check-label inline-block text-gray-800"
                    htmlFor="flexSwitchCheckDefault">
                        Default switch checkbox input
                </label> */}
        </div>
    )
}

export default SelectMode
