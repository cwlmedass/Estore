import React, { Component } from 'react';
import './StoreShop.css';


export default class StoreShop extends Component {
    render() {
        return (
            <div className="header">
                <h1></h1>
                <img src="./images/logo.png" alt="" className="image"></img>
                <input type='search' className='search' placeholder='search items here...'></input>
                
            </div>
        )
    }
}
