import React from 'react';

export default ({city, logo}) => <div style={{width: 85, height: 85, margin: 5}}>
    <img className="card-img-top"
         src={logo}
         alt={city}
    />
</div>

