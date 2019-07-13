import React from "react";
import {ReactComponent as Ornament} from "./topOrnament.svg";
import {ReactComponent as Circle} from "./circle.svg";
import {ReactComponent as LineV} from "./linev.svg";
import {ReactComponent as LineT} from "./linet.svg";
import {ReactComponent as LineB} from "./lineb.svg";
import {ReactComponent as Corner} from "./corner.svg";
import {PageContext} from "../index";

function OrnamentElement(props){
    return (
        <div id={props.id}>
            <button onClick={props.onClick} id="ornamentButton">
            <Ornament />
            </button>
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
        <div id={props.id} className="framePiece">
            <svg height="44px" className="windowObjectH" preserveAspectRatio="none">
                <rect className="windowLine" x="0" y="40px" height="2px" width="100%" />
            </svg> 
        </div>
    );
}
function LineElementB(props){
    return (
        <div id={props.id} className="framePiece">
            <svg height="44px" className="windowObjectH" preserveAspectRatio="none">
                <rect className="windowLine" x="0" y="24px" height="2px" width="100%" />
            </svg> 
        </div>
    );
}
function LineElementV(props){
    return (
        <div id={props.id} className="framePiece">
            <svg className="windowObjectV" preserveAspectRatio="none">
                <rect className="windowLine" x="0" y="0" height="100%" width="2px" />
            </svg> 
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
                <PageContext.Consumer>
                    {context => (
                    <OrnamentElement id="topCenter" onClick={() => {context.goto("home")}}/>
                    )
                    }
                </PageContext.Consumer>
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