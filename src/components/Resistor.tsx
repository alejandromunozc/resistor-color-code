import ResistorBand from './ResistorBand'
import { bandColors } from '../handlers/values'

const Resistor = () => {
  
  return (
    <>
    <div className='h-28 mt-16 flex justify-center relative'>
      <img src="../../src/img/resistor.png" alt="Resistencia" className='' />
      <div className="flex justify-start absolute -top-8">
        <div className="absolute -left-24" id="band1">
            {/* 1 */}
            <ResistorBand band={1} color={bandColors.brown} />
        </div>
        <div className="absolute -left-16" id="band2">
            {/* 2 */}
            <ResistorBand band={2} color={bandColors.black}  />
        </div>
        <div className="absolute -left-8" id="band3">
            {/* 3 */}
            <ResistorBand band={3} color={bandColors.red} />
        </div>
        <div className="absolute -left-0 hidden" id="band4">
            {/* 4 */}
            <ResistorBand band={4} color={bandColors.brown} />
        </div>
        <div className="absolute -right-16 hidden" id="band5">
            {/* 5 */}
            <ResistorBand band={5} color={bandColors.brown} />
        </div>
        <div className="absolute  -right-24" id="band6">
            {/* 6 */}
            <ResistorBand band={6} color={bandColors.brown} />
        </div>
      </div>
    </div>
    </>
  )
}

export default Resistor
