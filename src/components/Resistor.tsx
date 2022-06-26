import ResistorBand from './ResistorBand'
import { bandColors, valueBandColors } from '../handlers/values'
import { useState } from 'react'

const Resistor = () => {
  
  const [band1, setBand1] = useState( valueBandColors.black )
  const [band2, setBand2] = useState( valueBandColors.black )
  const [band3, setBand3] = useState( valueBandColors.black )
  const [band4, setBand4] = useState( valueBandColors.black )
  const [band5, setBand5] = useState( valueBandColors.black )
  const [band6, setBand6] = useState( valueBandColors.black )

  return (
    <>
    <div className='h-28 mt-16 flex justify-center relative'>
      <img src="../../src/img/resistor.png" alt="Resistencia" className='' />
      <div className="flex justify-start absolute -top-8">
        <div className="absolute -left-24" id="band1">
            {/* 1 */}
            <ResistorBand band={1} value={ band1 } handleUp={ setBand1 } />
        </div>
        <div className="absolute -left-16" id="band2">
            {/* 2 */}
            <ResistorBand band={2} value={ band2 } handleUp={ setBand2 }  />
        </div>
        <div className="absolute -left-8" id="band3">
            {/* 3 */}
            <ResistorBand band={3} value={ band3 } handleUp={ setBand3 } />
        </div>
        <div className="absolute -left-0 hidden" id="band4">
            {/* 4 */}
            <ResistorBand band={4} value={ band4 } handleUp={ setBand4 } />
        </div>
        <div className="absolute -right-16 hidden" id="band5">
            {/* 5 */}
            <ResistorBand band={5} value={ band5 } handleUp={ setBand5 } />
        </div>
        <div className="absolute  -right-24" id="band6">
            {/* 6 */}
            <ResistorBand band={6} value={ band6 } handleUp={ setBand6 } />
        </div>
      </div>
    </div>
    </>
  )
}

export default Resistor
