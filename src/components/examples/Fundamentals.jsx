
import React, { Component } from 'react'
import Cards from '../atoms/Cards';

export default class Fundamentals extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="examplesContainer fundamentalWrapper">
                    {
                        new Array(10).fill(0).map((e, i) => {
                            return <Cards key={i}>{i + 1}</Cards>
                        })
                    }
                </div>
            </React.Fragment>
        )
    }
}