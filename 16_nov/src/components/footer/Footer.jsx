import React from 'react';
import Icon from '../Icon';

const Footer = (props) => (
    <footer>
        <div className="copyright">
            <Icon className={"far fa-copyright"}/>
            <span>1996-2018 Dopos</span>
            <span>All rights reserved</span>
        </div>

        <div className="inquiries">
            <div className="inquiries__general">
                <p>General inquiries:</p>
                <span>hello@dopos.studio</span>
            </div>

            <div className="inquiries__press">
                <p>Press inquiries:</p>
                <span>Press@dopos.studio</span>
            </div>

        </div>
        <div className="policy">
            <p>Privacy policy</p>
            <p>Terms of Use</p>
        </div>
    </footer>
);

export default Footer;