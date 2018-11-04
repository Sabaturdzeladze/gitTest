import React from 'react';

const Address = (props) => (
    <div>
        {!!props && (
            <div>
                <p>City - {props.address.city}</p>
                <p>Street - {props.address.street}</p>
            </div>
        )}
    </div>
);


export default Address;