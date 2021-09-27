import React, { Component } from 'react'
import defaultBcg from '../components/Hero'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {HouseContext} from '../context'

export default class SingleHouse extends Component {
    render() {
        return (
            <div>
                Hello from single house page
            </div>
        )
    }
}
