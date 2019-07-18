import React from 'react';
import {ReactComponent as Graphic} from "./spiro.svg";
import anime from 'animejs';

class SpiroBackground extends React.Component {
    constructor(props){
        super(props);
        this.createRandomSpiro = this.createRandomSpiro.bind(this);
        this.state = {
            spiros: [],
            interval: 700,
        }
    }
    componentDidMount(){
        var intervalID = setInterval(this.createRandomSpiro, this.state.interval);
        this.setState({intervalID: intervalID});
        this.createManySpiros(3);
    }
    componentWillUnmount(){
        clearInterval(this.state.intervalID);
    }
    createManySpiros(number){
        for(var i = 0; i < number; i++){
            this.createRandomSpiro();
        }
    }
    createRandomSpiro(){
        let duration = this.random(1500, 2000);
        let size = this.random(50, 400);
        let rotation = this.random(20, 50);
        let distance = this.random(50, 200);
        let opacity = 71/size;
        let x = this.random(-20, 100);
        let y = this.random(0, 100);
        let spiro = (<Spiro x={x} y={y} duration={duration} size={size} rotation={rotation} distance={distance} opacity={opacity}/>);
        this.state.spiros.push(spiro);
        this.setState({spiros: this.state.spiros});
    }
    random(lowest, highest){
        // Returns an integer between the lowest and highest value, inclusive
        return Math.floor(Math.random()*(highest-lowest+1)+lowest)
    }
    render(){
        return this.state.spiros;
    }
}

class Spiro extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            duration: props.duration,
            size: props.size,
            rotation: -props.rotation,
            distance: props.distance,
            opacity: props.opacity,
        }
        this.ref = React.createRef();
        this.ref2 = React.createRef();
    }
    componentDidMount(){
        const opacityDuration = 1500;
        const opacity = .5;

        const timeline = anime.timeline({
            targets: [this.ref.current, this.ref2.current],
            easing: 'linear',
        });
        timeline.add({
            opacity: this.state.opacity,
            duration: opacityDuration,
        }, 0);
        timeline.add({  // Rotatoin
            translateY: -this.state.distance,
            rotate: this.state.rotation,  // Rotate must be after translate, or it'll move in a loop
            duration: this.state.duration + (opacityDuration*2),
        }, 0);
        timeline.add({
            opacity: 0,
            duration: opacityDuration,
        }, "-="+opacityDuration);
    }
    render() {
        return (
            <div>
                <Graphic style={{left: this.props.x+"vw", top: this.props.y+"vh"}} width={this.state.size} height={this.state.size} className="spiro spiroBG" ref={this.ref}/>
                <Graphic style={{left: this.props.x+"vw", top: this.props.y+"vh"}} width={this.state.size} height={this.state.size} className="spiro" ref={this.ref2}/>
            </div>
        )
    }
}

export default SpiroBackground;