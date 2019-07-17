import React from "react";
import "./button.less";

export default class Button extends React.Component{
    static defaultProps = {
        cls: "",
        type: "button"
    };

    render(){
        const className = `button ${this.props.cls}`;

        return (
            <button className={className} type={this.props.type}>
                {this.props.children}
            </button>
        )
    }
}
