import React from 'react';
import Icon from '../Icon';

const LeftArrow = (props) => (
    <div
        onClick={props.prevSlide}
    >
        <Icon
            className={"fas fa-arrow-left"}
        />
    </div>
);
      
export default LeftArrow;