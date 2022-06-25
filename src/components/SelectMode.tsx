const SelectMode = () => {

    const handleSelectMode = (e: any) => {
        if(e.target.checked){
            document.getElementById('bandsNumber')?.classList.add('hidden')
            document.getElementById('inputValue')?.classList.remove('hidden')
        } else {
            document.getElementById('bandsNumber')?.classList.remove('hidden')
            document.getElementById('inputValue')?.classList.add('hidden')
        }
    }

    return (
        <div className="w-full h-16 flex flex-wrap items-center justify-center gap-x-2 mt-4">
                <div className='grow text-right px-10'>Colores a Ω</div>
                <div className="text-center">
                    <div className="form-check form-switch">
                        <input 
                            onClick={ handleSelectMode }
                            className="form-check-input appearance-none w-16 -ml-16 rounded-full h-8 align-top bg-no-repeat bg-contain bg-primary focus:outline-none cursor-pointer shadow-sm checked:bg-primary"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                        />
                    </div>
                </div>
                <div className='grow text-left px-4'>Ω a Colores</div>
        </div>
    )
}

export default SelectMode
