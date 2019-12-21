import React, { Component } from 'react'
import logo from '../../public/assets/img/react-logo.png'

export default class Logo extends Component<any, any> {
    render() {
        return(
            <div>
                <img src={logo} alt="logo" />
            </div>
        )
    }
}