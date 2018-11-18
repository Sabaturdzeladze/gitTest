import React from 'react';
import Image from '../../Image';
import LeftArrow from '../../slider/LeftArrow';
import RightArrow from '../../slider/RightArrow';

const IdeasImage = (props) => (
  <div className="making--ideas__image">
    <LeftArrow
      prevSlide={props.prevSlide}
    />
    <Image src={props.image} />
    <RightArrow
      nextSlide={props.nextSlide}
    />
  </div>
);

export default IdeasImage;