import { CardDataTwo } from '../All-List-Data/CardData';

import React from 'react';
import '../../styles/Listing.css';

function ListingdataTwo() {

    return (
        <>
            {CardDataTwo.map((carddata, index)=>{
                return(
                <div className="card-items" key={index}>
                    <div className="card-img">
                        <img src={carddata.image} alt="pic" />
                    </div>
                    <div className="description">
                            <div className="desc">
                                <div>{carddata.loc}</div>
                                <div>{carddata.spec}</div>
                                <div>{carddata.price}</div>
                                <div>{carddata.contact}<a href="tel: {carddata.phone}">{carddata.phone}</a></div>
                                <div><span>{carddata.offer}</span></div>
                            </div>
                    </div>
                    <div className="card-content">
                        <div className="btn-space">{carddata.button}</div>
                        <div className="btn-space">{carddata.button2}</div>
                    </div>
                </div>
            )
            })}
        </>
    )
}

export default ListingdataTwo
