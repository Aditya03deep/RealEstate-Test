import React from 'react'
import '../styles/InfoSectionThree.css';
import Button from './Button';


function InfoSectionThree({ heading, paragraphOne, paragraphTwo, image, buttonLabel}) {
    return (
        <div className="Section">
            <div className="last-Container border">
                <div className="leftColumn left-border">
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button src={"/homes"} title={buttonLabel} />
                </div>
                <div className="rightColumn right-border border-Column-right">
                   
                    <img src={image} alt="home" />
                </div>

            </div>

        </div>
    )
}

export default InfoSectionThree
