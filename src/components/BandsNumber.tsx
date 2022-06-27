import { useState } from "react"

const BandsNumber = () => {

const [ checkedState, setCheckedState ] = useState([true, false, false])

    const handleBandsNumber = (num:Number) => {
        switch(num){
            case 4:
                document.getElementById('band4')?.classList.add('hidden')
                document.getElementById('band5')?.classList.add('hidden')
                setCheckedState([true, false, false])
                break
            case 5:
                document.getElementById('band4')?.classList.remove('hidden')
                document.getElementById('band5')?.classList.add('hidden')
                setCheckedState([false, true, false])
                break
            case 6:
                document.getElementById('band4')?.classList.remove('hidden')
                document.getElementById('band5')?.classList.remove('hidden')
                setCheckedState([false, false, true])
                break
        }
    }

    return (
        <div id="bandsNumber" className="">
            <p className='text-center pl-4 mt-4'>Bandas</p>
            <div className="flex justify-center items-start pl-4 mt-2">
                <label className="w-8 h-8 bg-primary rounded-tl-full rounded-bl-full flex justify-center items-center">
                    <input className='hidden peer' id="first" name="toggle-state" type="radio" onChange={ () => handleBandsNumber(4) } checked={ checkedState[0] } />
                    <span className="w-[calc(100%-6px)] h-[calc(100%-6px)] cursor-pointer bg-white rounded-full inline-block opacity-0 ease-in duration-300 peer-checked:opacity-100 peer-checked:inline-block"></span>
                </label>

                <label className="w-8 h-8 bg-primary flex justify-center items-center">
                    <input className='hidden peer' id="second" name="toggle-state" type="radio" onChange={ () => handleBandsNumber(5) } checked={ checkedState[1] } />
                    <span className="w-[calc(100%-6px)] h-[calc(100%-6px)] cursor-pointer bg-white rounded-full inline-block opacity-0 ease-in duration-300 peer-checked:opacity-100 peer-checked:inline-block"></span>
                </label>

                <label className="w-8 h-8 bg-primary rounded-tr-full rounded-br-full flex justify-center items-center">
                    <input className='hidden peer' id="third" name="toggle-state" type="radio" onChange={ () => handleBandsNumber(6) } checked={ checkedState[2] } />
                    <span className="w-[calc(100%-6px)] h-[calc(100%-6px)] cursor-pointer bg-white rounded-full inline-block opacity-0 ease-in duration-300 peer-checked:opacity-100 peer-checked:inline-block"></span>
                </label>
            </div>
            <div className="flex justify-center pl-4">
                <div className='w-8 text-center'>4</div>
                <div className='w-8 text-center'>5</div>
                <div className='w-8 text-center'>6</div>
            </div>
        </div>
    )
}

export default BandsNumber
