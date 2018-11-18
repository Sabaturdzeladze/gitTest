import React from 'react';
import Icon from '../Icon';

const RightArrow = (props) => (
    <div
        onClick={props.nextSlide}
    >
        <Icon
            className={"fas fa-arrow-right"}
        />
    </div>
)

export default RightArrow;