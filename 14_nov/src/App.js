import React, { Component } from 'react';
import Slide from './Components/Slide'
import LeftArrow from './Components/LeftArrow'
import RightArrow from './Components/RightArrow'
import './App.css'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [
        'https://placekitten.com/500/500',
        'https://placekitten.com/500/501',
        'https://placekitten.com/500/502',
        'https://placekitten.com/500/503',
      ],
      currentSlide: 0,
      translateValue: 0,
    }
  }
  prevSlide = () => {
    if (this.state.currentSlide === 0) return;

    this.setState( prevState => {
      return {
        currentSlide: prevState.currentSlide - 1,
        translateValue: prevState.translateValue + this.nextSlide(),
      }
    } )
  }
  nextSlide = () => {
    if ( (this.state.images.length - 1) === this.state.currentSlide ) {
      this.setState({
        currentSlide: 0,
        translateValue: 0
      })
    }

    this.setState( (prevState) => {
      return {
        currentSlide: prevState.currentSlide,
        translateValue: prevState.translateValue + ( this.nextSlide() ),
      }
    } )
  }

  moveSlide = () => {
    const translateValue = document.querySelector('.slider').clientWidth;
    console.log(this.state.translateValue);
  }

  render() {
    return (
      <div className="slider">
        <div className="slider__container"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-in-out 0.45s',
          }}>
          {
            this.state.images.map((image, index) => (<Slide key={index} image={image} />))
          }
        </div>
        <Slide image={'https://placekitten.com/300/300'} />
        <LeftArrow prevSlide={this.prevSlide} />
        <RightArrow nextSlide={this.nextSlide} />
      </div>
    );
  }
}
export default App;