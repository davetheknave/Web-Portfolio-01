import React from "react";
import Glide from "@glidejs/glide";

class Screenshots extends React.Component {
    constructor(props){
        super(props);
        this.ref = React.createRef();
    }
    componentDidMount(){
        this.glide = new Glide(this.ref.current).mount();
    }
    componentWillUnmount(){
        this.glide.destroy();
    }
    render() {
        return (
            <div className="glide" ref={this.ref}>
                <div data-glide-el="track" className="glide__track">
                    <ul className="glide__slides">
                        <li className="glide__slide">Hi</li>
                        <li className="glide__slide">Hello</li>
                        <li className="glide__slide">Bye</li>
                    </ul>
                </div>
                <div data-glide-el="controls">
                    <button className="glide__arrow glide__arrow--left" data-glide-dir="<">{"<"}</button>
                    <button className="glide__arrow glide__arrow--right" data-glide-dir=">">{">"}</button>
                </div>
        </div>
        );
    }
}

export default Screenshots;