import React from 'react';
import './index.css';
import './index';
import { PageContext } from './index';
import {ReactComponent as ButtonI} from "./button.svg";

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {label: props.label, onClick : props.onClick};
    }
    render (){
        const big = (label) => {if(label == "Privacy Policy") return "bigLabel"};
        return (
            <div>
                <button className="navButton" onClick={this.state.onClick}>
                    <ButtonI/>
                    <span className="buttonLabel" id={big(this.state.label)}>{this.state.label}</span>
                </button>
            </div>
        )
    }
}

class Navigation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            window: props.window,
            navigate: props.navigate,
        };
    }
    render (){
        return (
            <div id="navigation">
                {this.button("About", "about", "charmT")}
                {this.button("Work", "work", "charmL1")}
                {this.button("Resume", "resume", "charmR1")}
                {this.button("Contact", "contact", "charmL2")}
                {this.button("Privacy Policy", "site", "charmR2")}
            </div>
        );
    }
    navigate(name){
        this.context = name;
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
}

export default Navigation;