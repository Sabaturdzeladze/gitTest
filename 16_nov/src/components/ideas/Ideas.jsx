import React from 'react';
import IdeasHeader from './header/IdeasHeader';
import IdeasParagraph from './paragraph/IdeasParagraph';
import IdeasImage from './image/IdeasImage';
import IdeasClients from './clients/IdeasClients';

const images = [
    '/images/bckg.jpg',
    '/images/sect1.jpg',
    '/images/sect2.jpg',
    '/images/sect3.jpg',
    '/images/sect4.jpg'
]

class Ideas extends React.Component {
    state = {
        currentSlide: 0
    }

    nextSlide = () => {
        this.setState( prevState => {
            if (this.state.currentSlide < images.length - 1) {
                return { currentSlide: prevState.currentSlide + 1 };
            } else {
                return { currentSlide: 0 };
            }
        } )
    }

    prevSlide = () => {
        this.setState( prevState => {
            if (this.state.currentSlide > 0) {
                return { currentSlide: prevState.currentSlide - 1 };
            } else {
                return { currentSlide: images.length - 1 };
            }
        } )
    }

    render() {
        return (
            <div className="making--ideas">
                <IdeasHeader />
                <IdeasImage
                    image={images[this.state.currentSlide]}
                    prevSlide={this.prevSlide}
                    nextSlide={this.nextSlide}
                />
                <IdeasParagraph />
                <IdeasClients />
            </div>
        )
    }
};

export default Ideas;