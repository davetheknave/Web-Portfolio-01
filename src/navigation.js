import React from 'react';
import './index.css';
import './index';
import { PageContext } from './index';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {label: props.label, onClick : props.onClick};
    }
    render (){
        return (
            <div>
                <button onClick={this.state.onClick}>{this.state.label}</button>
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
                {this.button("Home", "home", "charmT")}
                {this.button("About", "about", "charmL1")}
                {this.button("Work", "work", "charmR1")}
                {this.button("Resume", "resume", "charmL2")}
                {this.button("About this site", "site", "charmR2")}
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