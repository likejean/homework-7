import React from 'react';
import loos from '../assets/logos/portland_logo.jpg';
export default ({ city, logo }) => {
    console.log(loos)
    return (
        <div style={{ width: 85, height: 85, margin: 5 }}>
            <img className="card-img-top"
                 src={logo}
                 alt={city}
            />
        </div>
    )
}