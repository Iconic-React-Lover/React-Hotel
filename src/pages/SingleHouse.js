import React, { Component } from 'react'
import defaultBcg from '../components/Hero'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { HouseContext } from '../context'

export default class SingleHouse extends Component {

    static contextType = HouseContext;

    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if (!room) {
            return <div className="error">
                <h3>no such room could be found</h3>
            </div>
        }
        return <div>
            hello from single house page{room.name}
        </div>
    }
}
