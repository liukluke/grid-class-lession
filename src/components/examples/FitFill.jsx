import React, { Component } from 'react'
import Cards from '../atoms/Cards';

export default class FitFill extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="examplesContainer fitFillWrapper">
                    {
                        new Array(4).fill(0).map((e, i) => {
                            return <Cards key={i} classCard={"item-" + (i + 1)}>{i + 1}</Cards>
                        })
                    }
                </div>
            </React.Fragment>
        )
    }
}

