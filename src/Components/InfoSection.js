import React from 'react'
import '../styles/InfoSection.css';
import Button from './Button';


function InfoSection({heading,paragraphOne,paragraphTwo,image,buttonLabel}) {
    return (
        <div className="Section">
            <div className="Container">
                <div className="ColumnLeft">
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button src={"/homes"} title={buttonLabel}/>
                </div>
                <div className="ColumnRight">
                    <img src={image} alt="home"/>
                </div>

            </div>

        </div>
    )
}

export default InfoSection
