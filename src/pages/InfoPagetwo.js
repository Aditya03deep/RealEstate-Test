import React from 'react'
import InfoSectionTwo from '../Components/InfoSectionTwo'
import { InfoDataTwo } from '../data/Infodata';

function InfoPagetwo() {
    return (
        <div>
            <InfoSectionTwo {...InfoDataTwo}/>
        </div>
    )
}

export default InfoPagetwo
