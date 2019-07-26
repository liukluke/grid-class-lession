import React, { Component } from 'react'
import Cards from '../atoms/Cards';

export default class Placing extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="examplesContainer placingWrapper">
                    {
                        new Array(31).fill(0).map((e, i) => {
                            return <Cards key={i} classCard={"item-" + (i + 1)}>{i + 1}</Cards>
                        })
                    }
                </div>
            </React.Fragment>
        )
    }
}

