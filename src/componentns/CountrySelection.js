import React from 'react';
import { MDBBtn } from 'mdbreact';

export default props => {
    return (
        <div className='input-search-wrapper'>
            <div className='input-search-row'>
                <form onSubmit={props.handleSubmit}>
                    <select value={props.city} onChange={props.handleChange} className="city-select browser-default custom-select">
                        <option>Choose City</option>
                        {props.cities.map((city, idx) => <option key={idx} value={city}>{city}</option>)}
                    </select>
                    <MDBBtn className='get-weather-data' type='submit' onClick={props.handleSubmit}>GET DATA</MDBBtn>
                </form>
            </div>
        </div>

    );
};
