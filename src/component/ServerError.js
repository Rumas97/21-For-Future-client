import React, { Component } from 'react'
import data from "../animations/dog.json"
import LottieControl from './LottieControl'

class ServerError extends Component {
    render() {
        return (
            <div>
                <h3>Ooops!!! It seems there is a problem with our servers. The developers and our dog Morrison are working hard at fixing it!  </h3>
                <LottieControl animation={data} width={"30rem"} height={"30rem"}/>
            </div>
        )
    }
}

export default ServerError
