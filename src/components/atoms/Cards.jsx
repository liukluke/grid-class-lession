import React, { Component } from 'react'

export default class Cards extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={"card " + this.props.classCard}><h4>{this.props.children}</h4></div>
            </React.Fragment>
        )
    }
}
