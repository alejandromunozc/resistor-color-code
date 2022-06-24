import ResistorBand from './ResistorBand'

const Resistor = () => {
  return (
    <>
    <div className='h-28 mt-16 flex justify-center relative'>
      <img src="../../src/img/resistor.png" alt="Resistencia" className='' />
      <div className="flex justify-start absolute -top-8">
        <div className="absolute -left-24" id="band1">
            {/* 1 */}
            <ResistorBand />
        </div>
        <div className="absolute -left-16" id="band2">
            {/* 2 */}
            <ResistorBand />
        </div>
        <div className="absolute -left-8" id="band3">
            {/* 3 */}
            <ResistorBand />
        </div>
        <div className="absolute -left-0 hidden" id="band4">
            {/* 4 */}
            <ResistorBand />
        </div>
        <div className="absolute -right-16 hidden" id="band5">
            {/* 5 */}
            <ResistorBand />
        </div>
        <div className="absolute  -right-24" id="band6">
            {/* 6 */}
            <ResistorBand />
        </div>
      </div>
    </div>
    </>
  )
}

export default Resistor
