import ResistorBand from './ResistorBand'

const Resistor = () => {
  return (
    <>
    <div className='h-28 mt-16 flex justify-center relative'>
      <img src="../../src/img/resistor.png" alt="Resistencia" className='' />
      <div className="flex justify-start absolute -top-8">
        <div className="absolute -left-24">
            {/* 1 */}
            <ResistorBand />
        </div>
        <div className="absolute -left-16">
            {/* 2 */}
            <ResistorBand />
        </div>
        <div className="absolute -left-8">
            {/* 3 */}
            <ResistorBand />
        </div>
        <div className="absolute -left-0 hidden">
            {/* 4 */}
            <ResistorBand />
        </div>
        <div className="absolute -right-16 hidden">
            {/* 5 */}
            <ResistorBand />
        </div>
        <div className="absolute  -right-24">
            {/* 6 */}
            <ResistorBand />
        </div>
      </div>
    </div>
    </>
  )
}

export default Resistor
