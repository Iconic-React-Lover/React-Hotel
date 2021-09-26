import React, { Component } from 'react';
import { HouseContext } from "../context";
import Loading from ".Loading";
import House from "./House";
import Title from "./Title";

export default class FeaturedHouse extends Component {
    static contextType = HouseContext;

    render() {
        let { featuredHouse: house } = this.context;
        this.context;
        house = house.map(house => {
            return <House key={house.id} house={house} />
        })

        return (
            <section className="featured-rooms">
                <Title title="featured rooms" />
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : house}
                </div>
            </section>
        );
    }
}
