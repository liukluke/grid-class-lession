import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Cards from './atoms/Cards';

export default class Home extends Component {
    render() {
        return (
            <div className="homeContainer">
                <h2>Grid examples</h2>
                <section className="wrapper">
                    <Link to="/foundamentals"><Cards>Foundamentals</Cards></Link>
                    <Link to="/implicitExplicit"><Cards>Implicit vs Explicit</Cards></Link>
                    <Link to="/autoflow"><Cards>Autoflow</Cards></Link>
                    <Link to="/sizingtracks"><Cards>Sizing tracks</Cards></Link>
                    <Link to="/repeat"><Cards>Repeat</Cards></Link>
                    <Link to="/sizingitems"><Cards>Sizing Items</Cards></Link>
                    <Link to="/placing"><Cards>Placing</Cards></Link>
                    <Link to="/fitfill"><Cards>FitFill</Cards></Link>
                </section>
            </div>
        )
    }
}
