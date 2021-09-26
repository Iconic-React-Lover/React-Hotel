import React, { Component } from 'react'; 
import {HouseContext} from "../context";

export default class FeaturedHouse extends
Component {
    static contextType = HouseContext
    render() {
        const value = this.context;
        console.log(value);
        return (
            <div>
                Hello from Featured House {value}
            </div>
        )
    }
}
