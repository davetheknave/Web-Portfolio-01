import React from 'react';
import anime from 'animejs';

function Dot(props){
    return (
        <div className="dot" style={{height: props.size, width: props.size, left: props.left}} />
    )
}

export class Blob extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            size: 40,  // This can technically be a stirng like "2em", but it shouldn't, for math
            blobNumber: 50,  // Number of dots in the blob. determines the length, along with delay
            delay: 1,  // Delay between dots moving in milliseconds. Basically how "stretched" the trail is
            duration: 200,
            complete: false,
        };
    }
    componentDidMount(){
        const leftOffset = -30;
        const topOffset = -328;
        const scale = 0.68;
        const target = '.dot';
        const timeline = anime.timeline({
            easing: 'easeInOutQuad',
            duration: this.state.duration,
            delay: anime.stagger(this.state.delay),
            complete: (anim) => {this.setState({complete: true});}
        });
        anime.set(target, {translateX: leftOffset + 500 * scale, translateY: topOffset + 0 * scale})
        timeline.add({duration: 300});  // This is a delay
        this.addMotion(timeline, target, leftOffset + 794 * scale, topOffset + 904.5 * scale);
        this.addMotion(timeline, target, leftOffset + 24.5 * scale, topOffset + 345.5 * scale);
        this.addMotion(timeline, target, leftOffset + 975.5 * scale, topOffset + 345.5 * scale);
        this.addMotion(timeline, target, leftOffset + 206 * scale, topOffset + 904.5 * scale);
        this.addMotion(timeline, target, leftOffset + 500 * scale, topOffset + 0 * scale);
        timeline.add({duration: 400});
    }
    addMotion(timeline, targets, x, y){
        timeline.add({
            targets: targets,
            translateX: x,
            translateY: y,
        })
    }
    render(){
        if(this.state.complete){
            return this.props.children;
        }
        else {
            const dots = [];
            var currentSize = this.state.size;
            const sizeStep = currentSize/this.state.blobNumber;
            for(var i = 0; i < this.state.blobNumber; i++){
                dots.push(<Dot size={currentSize} left={(this.state.size-currentSize)/2}/>);
                currentSize -= sizeStep;
            }
            return dots;
        }
    }
}

export default Blob;