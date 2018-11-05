import React from 'react';

const PortfolioID = (props) => (
    <div>
        <h2>Portfolio Item Page</h2>
        <p>This is the portfolio with ID: {props.match.params.id}</p>
    </div>
);

export default PortfolioID;