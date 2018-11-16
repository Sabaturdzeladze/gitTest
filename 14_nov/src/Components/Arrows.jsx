import React from 'react';

const LeftArrow = (props) => {
    return (
        <div className="back__arrow arrow" onClick={props.prevSlide}>
            <i className="fas fa-arrow-left"></i>
        </div>
    )
}


const RightArrow = (props) => {
    return (
        <div className="next__arrow arrow" onClick={props.nextSlide}>
            <i className="fas fa-arrow-right"></i>
        </div>
    )
}

const Arrows = {
    LeftArrow,
    RightArrow
}


export default Arrows; 