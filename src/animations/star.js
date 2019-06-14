import React from "react";
import anime from "animejs";

class StarAnimation extends React.Component{
    
    constructor(props){
        super(props);
        this.el = React.createRef();
    }
    //componentDidMount(){
    //    anime({
    //        targets: '#star',
    //        translateX: 250,
    //         rotate: '1turn',
    //         backgroundColor: '#FFF',
    //         duration: 800
    //       });
    // }
    componentWillUnmount(){

    }
    componentDidUpdate(){

    }
    render(){
        return(
            <div>
                <div className="animation" ref={el => this.el = el}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default StarAnimation;