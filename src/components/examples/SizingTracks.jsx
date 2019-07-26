
import React, { Component } from 'react'
import Cards from '../atoms/Cards';

export default class SizingTracks extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="examplesContainer sizingTracksWrapper">
                    {
                        new Array(10).fill(0).map((e, i) => {
                            return <Cards key={i} classCard={"item-" + (i+1)}>{i + 1}</Cards>
                        })
                    }
                </div>
            </React.Fragment>
        )
    }
}