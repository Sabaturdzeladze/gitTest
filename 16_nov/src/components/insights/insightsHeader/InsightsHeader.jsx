import React from 'react';
import Button from '../../Button';

const InsightsHeader = () => (
    <div className="insights--header">
        <h3>Latests Blog Posts</h3>
        <hr />

        <div className="insights--header__section">
            <p>Subscribe to receive free email updates</p>
            <span>Quisque ut quis sagittis!</span>
            <input type="text" placeholder="Enter your email" />
            <Button className={"button subscribe"} text={"SUBSCRIBE"} />
        </div>
    </div>    
);

export default InsightsHeader;