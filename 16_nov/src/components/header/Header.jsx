import React from 'react';
import Nav from '../navigation/Nav';
import Icon from '../icons/Icon';

const links = [
    { page: 'HOME', link: '#' },
    { page: 'PRODUCTS', link: '#' },
    { page: 'AWARDS', link: '#' },
    { page: 'CONTACT US', link: '#' },
]

const Header = (props) => {
    return (
        <header>
            <h1>Dopos</h1>
            <Nav links={links} />
            <div className="login">
                <p>LOG IN</p>
                <Icon className={"fas fa-user-circle"} />
            </div>
        </header>
    );
};

export default Header;