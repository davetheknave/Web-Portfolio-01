import React from 'react';
import {ReactComponent as Graphic} from "./spiro.svg";
import anime from 'animejs';

class SpiroBackground extends React.Component {
    constructor(props){
        super(props);
        this.createRandomSpiro = this.createRandomSpiro.bind(this);
        this.createManySpiros = this.createManySpiros.bind(this);
        this.state = {
            spiros: [],
            active: [],
            interval: 700,
            maxSpiros: 7
        }
        this.currentIndex = 0;
    }
    componentDidMount(){
        this.createManySpiros(3);
        var intervalID = setInterval(this.createRandomSpiro, this.state.interval);
        this.setState({intervalID: intervalID});
    }
    componentWillUnmount(){
        clearInterval(this.state.intervalID);
    }
    createManySpiros(number){
        var s = [];
        for(var i = 0; i < number; i++){
            this.createRandomSpiro();
        }
    }
    createRandomSpiro(){
        if(this.state.active[this.currentIndex]){
            return;
        }
        const duration = this.random(1500, 4000);
        const size = this.random(50, 300);
        const rotation = -this.random(20, 50);
        const distance = -this.random(50, 200);
        const opacity = 71/size;
        const x = this.random(-10, 90);
        const y = this.random(10, 90);

        const index = this.currentIndex;
        const spiro = (<Spiro x={x} y={y} duration={duration} size={size} rotation={rotation} distance={distance} opacity={opacity} complete={() => {
            const a = this.state.active;
            a[index] = false;
            this.setState({active: a});
        }}/>);
        
        const a = this.state.spiros;
        a[this.currentIndex] = spiro;
        
        const b = this.state.active;
        b[this.currentIndex] = true;

        this.setState({spiros: a, active: b});

        this.currentIndex += 1;
        if (this.currentIndex >= this.state.maxSpiros){
            this.currentIndex = 0;
        }
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

        this.ref = React.createRef();
        this.ref2 = React.createRef();
    }
    componentDidUpdate(){
        this.timeline.restart();
    }
    componentDidMount(){
        this.animate();
    }
    animate(){
        const opacityDuration = 1500;

        this.timeline = anime.timeline({
            targets: [this.ref.current, this.ref2.current],
            easing: 'linear',
            complete: this.props.complete,
        });
        this.timeline.add({
            opacity: this.props.opacity,
            duration: opacityDuration,
        }, 0);
        this.timeline.add({  // Rotatoin
            translateY: this.props.distance,
            rotate: this.props.rotation,  // Rotate must be after translate, or it'll move in a loop
            duration: this.props.duration + (opacityDuration*2),
        }, 0);
        this.timeline.add({
            opacity: 0,
            duration: opacityDuration,
        }, "-="+opacityDuration);
    }
    render() {
        return (
            <div>
                <Graphic style={{left: this.props.x+"vw", top: this.props.y+"vh"}} width={this.props.size} height={this.props.size} className="spiro spiroBG" ref={this.ref}/>
                <Graphic style={{left: this.props.x+"vw", top: this.props.y+"vh"}} width={this.props.size} height={this.props.size} className="spiro" ref={this.ref2}/>
            </div>
        )
    }
}

export default SpiroBackground;