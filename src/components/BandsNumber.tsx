const BandsNumber = () => {
    return (
        <>
            <p className='text-center pl-4 mt-4'>Bandas</p>
            <div className="flex justify-center items-start pl-4 mt-2">
                <label className="w-8 h-8 bg-primary rounded-tl-full rounded-bl-full flex justify-center items-center">
                    <input className='hidden peer' id="first" name="toggle-state" type="radio" checked/>
                    <span className="w-[calc(100%-6px)] h-[calc(100%-6px)] bg-white rounded-full inline-block opacity-0 ease-in duration-300 peer-checked:opacity-100 peer-checked:inline-block"></span>
                </label>

                <label className="w-8 h-8 bg-primary flex justify-center items-center">
                    <input className='hidden peer' id="second" name="toggle-state" type="radio" />
                    <span className="w-[calc(100%-6px)] h-[calc(100%-6px)] bg-white rounded-full inline-block opacity-0 ease-in duration-300 peer-checked:opacity-100 peer-checked:inline-block"></span>
                </label>

                <label className="w-8 h-8 bg-primary rounded-tr-full rounded-br-full flex justify-center items-center">
                    <input className='hidden peer' id="third" name="toggle-state" type="radio" />
                    <span className="w-[calc(100%-6px)] h-[calc(100%-6px)] bg-white rounded-full inline-block opacity-0 ease-in duration-300 peer-checked:opacity-100 peer-checked:inline-block"></span>
                </label>
            </div>
            <div className="flex justify-center pl-4">
                <div className='w-8 text-center'>4</div>
                <div className='w-8 text-center'>5</div>
                <div className='w-8 text-center'>6</div>
            </div>
        </>
    )
}

export default BandsNumber
