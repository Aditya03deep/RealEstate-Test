import React from 'react'
import InfoSection from '../Components/InfoSection';
import {InfoData} from '../data/Infodata';

function InfoPageone() {
    return (
        <div>
            <InfoSection {...InfoData}/>
        </div>
    )
}

export default InfoPageone
