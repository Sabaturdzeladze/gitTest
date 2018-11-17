import React from 'react';
import Icon from '../Icon';
import Button from '../Button';

const MainWrapper = () => {
    const renderCircles = () => {
        const circles = [];
        for (let i = 0; i < 4; i++){
            circles.push(
                <div key={i} className="main--wrapper__circle">
                    <Icon className={"fas fa-circle"} />
                </div>
            )
        }

        return circles;
    }

    return (
        <div className="main--wrapper">
            <div className="main--wrapper__section">
                <h2>Creative Design & Advertising</h2>

                <div className="diagram">
                    <Icon className={"far fa-chart-bar"} />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quae praesentium velit assumenda.</p>
                </div>

                <Button className={"button learn--more"} text={"LEARN MORE"} />

                <div className="main--wrapper__circles">
                    {
                        renderCircles()
                    }
                </div>
            </div>
        </div>
    )
};

export default MainWrapper;