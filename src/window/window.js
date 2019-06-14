import React from "react";
import {ReactComponent as Ornament} from "./topOrnament.svg";
import {ReactComponent as Circle} from "./circle.svg";
import {ReactComponent as LineV} from "./linev.svg";
import {ReactComponent as LineT} from "./linet.svg";
import {ReactComponent as LineB} from "./lineb.svg";
import {ReactComponent as Corner} from "./corner.svg";

function OrnamentElement(props){
    return (
        <div id={props.id}>
            <Ornament />
        </div>
    );
}
function CornerElement(props){
    return (
        <div id={props.id}>
            <Corner />
        </div>
    );
}
function LineElementT(props){
    return (
        <div id={props.id}>
            <LineT />
        </div>
    );
}
function LineElementB(props){
    return (
        <div id={props.id}>
            <LineB />
        </div>
    );
}
function LineElementV(props){
    return (
        <div id={props.id} className="framePiece">
            <LineV />
        </div>
    );
}
function CircleElement(props){
    return (
        <div id={props.id}>
            <Circle />
        </div>
    );
}

class Window extends React.Component {
    render(){
        return (
            <div className="frame">
                <CornerElement id="topLeftCorner"/>
                <LineElementT id="topLeft"/>
                <OrnamentElement id="topCenter"/>
                <LineElementT id="topRight"/>
                <CornerElement id="topRightCorner"/>
                <LineElementV id="left"/>
                <div id="center">
                    {this.props.children}
                </div>
                <LineElementV id="right"/>
                <CornerElement id="bottomLeftCorner"/>
                <LineElementB id="bottomLeft"/>
                <CircleElement id="bottom"/>
                <LineElementB id="bottomRight"/>
                <CornerElement id="bottomRightCorner"/>
            </div>
        );
    }
}

export default Window;