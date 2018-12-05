import React from 'react';
// import { Link } from 'react-router-dom';
import Nav from '../navigation/Nav';
import Icon from '../Icon';

const Header = (props) => {
    return (
        <header>
            <h1>Dopos</h1>
            <Nav links={props.links} />
            <div className="login">
                <p>LOG IN</p>
                <Icon className={"fas fa-user-circle"} />
            </div>
        </header>
    );
};

export default Header;