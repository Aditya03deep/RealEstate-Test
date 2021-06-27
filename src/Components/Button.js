import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Button.css';

function Button({title,src}) {
    return (
        <Link to={src} className="link">
        <div className="Button hover">
            {title}
        </div>
        </Link>
    )

}

export default Button
