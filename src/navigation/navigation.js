import React from 'react';
import '../index';
import { PageContext } from '../index';
import {ReactComponent as ButtonI} from "./button.svg";

class Navigation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            window: props.window,
            navigate: props.navigate,
        };
    }
    button(label, pageID, charm){
        return (
            <PageContext.Consumer>
                {(context) => (
                    <>
                <div id={charm} className="charm">
                    <Button label={label} onClick={() => {context.goto(pageID)}}/>
                </div>
                </>
                )}
            </PageContext.Consumer>
        );
    }
    render (){
        return (
            <div id="navigation">
                {this.button("About", "about", "charmT")  /** Top button*/}
                {this.button("Work", "work", "charmL1")  /**  Left upper */}
                {this.button("Resume", "resume", "charmR1") /** Right upper */}
                {this.button("Contact", "contact", "charmL2") /** Left lower */}
                {this.button("Privacy Policy", "site", "charmR2") /** right lower */}
            </div>
        );
    }
}

function Button(props){
    const big = (label) => {if(label.length > 7) return "bigLabel"};  // This just shrinks the font size to fit larger labels. Still shouldn't exceed 20 chars or so.
    return (
        <div>
            <button className="navButton" onClick={props.onClick}>
                <ButtonI/>
                <span className="buttonLabel" id={big(props.label)}>{props.label}</span>
            </button>
        </div>
    );
}

export default Navigation;