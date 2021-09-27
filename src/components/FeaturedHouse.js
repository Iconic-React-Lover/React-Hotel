import React, { Component } from 'react';
import { HouseContext } from "../context";
import Loading from "./Loading";
import House from "./House";
import Title from "./Title";

export default class FeaturedHouse extends Component {
    static contextType = HouseContext;

    render() {
        let { loading, featuredHouse: house } = this.context;
        house = house.map(house => {
            return <House key={house.id} house={house} />
        })

        return (
            <section className="featured-house">
                <Title title="featured house" />
                <div className="featured-house-center">
                    {loading ? <Loading /> : house}
                </div>
            </section>

        );
    }
}
