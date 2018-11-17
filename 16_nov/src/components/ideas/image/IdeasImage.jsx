import React from 'react';
import Image from '../../images/Image';
import Icon from '../../icons/Icon';

const IdeasImage = () => (
    <div className="making--ideas__image">
      <div><Icon className={"fas fa-arrow-left"}/></div>
      <Image src={"/images/bckg.jpg"} />
      <div><Icon className={"fas fa-arrow-right"}/></div>
    </div>
);

export default IdeasImage;