import React from 'react';
const RightArrow = (props) => {
    return (
        <div className="next__arrow arrow" onClick={props.nextSlide}>
            <i className="fas fa-arrow-right"></i>
        </div>
    )
}
export default RightArrow; 