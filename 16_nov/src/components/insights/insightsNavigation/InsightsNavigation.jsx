import React from 'react';
import Icon from '../../Icon';
import Button from '../../Button';

const InsightsNavigation = () => (
    <div className="insights--navigation">
        <div className="insights--navigation__arrows">
            <div><Icon className={"fas fa-arrow-left"}/></div>
            <div><Icon className={"fas fa-arrow-right"}/></div>
        </div>
        <Button
            className={"button all_articles"}
            text={"ALL ARTICLES"}
        />
    </div>
);

export default InsightsNavigation;