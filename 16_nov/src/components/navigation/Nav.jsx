import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav>
            {
                props.links.map( (item, index) => (
                    <Link
                        key={index}
                        to={item.link}
                    >{item.page}</Link>
                ))
            }
        </nav>
    );
}

export default Nav;