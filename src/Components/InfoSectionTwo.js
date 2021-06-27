import React from 'react'
import '../styles/InfoSectionTwo.css';
import Button from './Button';


function InfoSection({ heading, paragraphOne, paragraphTwo, image, reverse, buttonLabel }) {
    return (
        <div className="Section">
            <div className="Container">
                <div className="ColumnLeft">
                    <img src={image} alt="home" />
                </div>
                <div className="ColumnRight" reverse={reverse}>
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button src={"/homes"} title={buttonLabel} />
                </div>

            </div>

        </div>
    )
}

export default InfoSection
