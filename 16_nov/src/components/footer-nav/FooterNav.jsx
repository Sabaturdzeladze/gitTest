import React from 'react';
import Nav from '../navigation/Nav';
import Icon from '../Icon';

const FooterNav = (props) => {
    return (
        <div className="footer--nav">
            <h3>Dopos</h3>
            <Nav links={props.links} />
            <div className="social">
                <Icon className={"fab fa-facebook"} />
                <Icon className={"fab fa-twitter"} />
                <Icon className={"fab fa-instagram"} />
            </div>
        </div>
    );
};

export default FooterNav;