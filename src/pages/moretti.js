import React from 'react';
import ReactDOM from 'react-dom';
import Page from './page';
import Slider from 'react-slick';

class Gallery extends React.Component {
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }
        return (
            <Slider {...settings}>
                <div><h2>1</h2></div>
                <div><h2>2</h2></div>
                <div><h2>3</h2></div>
                <div><h2>4</h2></div>
                <div><h2>5</h2></div>
                <div><h2>6</h2></div>
            </Slider>
        )
    }
}

class Moretti extends Page {
    render(){
        return (
            <div>
                <h1>Project Moretti</h1>
                <p>Top Secret</p>
                <Gallery />
            </div>);
    }
}
export default Moretti;