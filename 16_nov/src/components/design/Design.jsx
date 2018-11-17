import React from 'react';
import Image from '../Image';
import Button from '../Button';

const images = [
    "/images/sect1.jpg",
    "/images/sect2.jpg",
    "/images/sect3.jpg",
    "/images/sect4.jpg",
]

const Design = (props) => (
    <div className="design--section">
        <div className="design--section__main">
            <div className="section__main__header">
                <h3>Design Solution For Any Media</h3>
            </div>
            <div className="section__main__paragraph">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere molestias cupiditate vitae?</p>
                <Button className={"button learn__more"} text={"LEARN MORE"} />
            </div>
        </div>
        <div className="section__images">
            {
                images.map( (image, index) => (
                    <Image key={index} src={image} />
                ) )
            }
        </div>
    </div>
);
                    
export default Design;