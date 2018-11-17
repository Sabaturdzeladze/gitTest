import React from 'react';
import Link from '../links/Link';

const Nav = (props) => {
    return (
        <nav>
            {
                props.links.map( (item, index) => (
                    <Link
                        key={index}
                        link={item.link}
                        page={item.page}
                    />
                ))
            }
        </nav>
    );
}

export default Nav;