import React from 'react';
import anime from 'animejs';

class Animation extends React.Component {
    constructor(props){
        super(props);
        this.ref = React.createRef();
    }
    componentDidMount(){
        anime({
            targets: this.ref.current,
            rotate: '1turn',
            duration: 1600
          });
    }
    componentWillUnmount(){
        
    }
    render(){
        return (
            <div className="animation" ref={this.ref} id="starText">
                {this.props.children}
            </div>
        );
    }
}
export default Animation;