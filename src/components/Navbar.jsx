import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <Link to="/"><h2><i className="fas fa-home"></i></h2></Link>
            </nav>
        )
    }
}
