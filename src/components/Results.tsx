const Results = () => {
  return (
    <>  
        <div className="flex mt-4">
            <div className="w-1/12 md:w-4/12 lg:w-4/12"></div>
            <div className="h-auto w-10/12 mt-12 flex justify-center border-[#8AB933] border-4 rounded-xl md:w-4/12 lg:w-4/12">
                <div className="w-6/12">
                    <ul className="font-semibold text-right">
                        <li className="bg-primary pr-1">Valor</li>
                        <li className="pr-1">Tolerancia</li>
                        <li className=" bg-primary pr-1">Coeficiente Temp</li>
                        <li className="pr-1">Comerciales</li>
                    </ul>
                </div>
                <div className="w-6/12">
                    <ul className="">
                        <li className="bg-primary pl-1">470k</li>
                        <li className="pl-1">+/- 5%</li>
                        <li className="bg-primary pl-1">100 PPM</li>
                        <li className="pl-1">470K</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Results
