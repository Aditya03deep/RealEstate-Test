import React from 'react';
import '../styles/Listing.css';
import ListingdataOne from '../data/All-List-Data/ListingdataOne';
import ListingdataTwo from '../data/All-List-Data/ListingdataTwo';
import ListingdataThree from '../data/All-List-Data/ListingdataThree';
import Button from './Button';


function Listing() {
    return (
        <div className="Listing-container">
            <div className="Listing-section">
                <div className="list-header">
                    <h1>Featured Houses</h1>
                    <p>We got you covered. All available House details present below </p>
                </div>
                <div className="list-info">
                    <div className="list-cards">
                        <ListingdataOne />
                    </div>
                    <div className="list-cards">
                        <ListingdataTwo />
                    </div>
                    <div className="list-cards">
                        <ListingdataThree />
                    </div>
                </div>
                <div className="listing-page-btn">
                    <Button title={'View More'} src={'/homes'}/>
                </div>
            </div>

        </div>
    )
}

export default Listing
