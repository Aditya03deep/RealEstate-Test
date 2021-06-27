import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Listing.css';

function CardButton({ title, src }) {

    const name = title;
    return (
        <div className="btn-content">
            <Link to={src} className="btn-link">
                <button className ={name === 'BUY'? 'Card-button btn-color' :'Card-button' }>{title}</button>
            </Link>
        </div>
    )

}

export default CardButton
