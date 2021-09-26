import React, { Component } from 'react';
import items from './data';

const HouseContext = React.createContext();
// <HouseContext.Provider value={}

class HouseProvider extends Component {
    state = {
        house: [],
        sortedHouse: [],
        featuredHouse: [],
        loading: true
    };

    //getData
    componentsDidMount() {
        let house = this.formatData(items);
        let featuredHouse = house.filter(house => house.feauture === true);
        this.setState({
            house, featuredHouse, sortedHouse: house, loading: false
        });
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image =>
                image.fields.file.url);

            let house = { ...item.fields, images, id };
            return house;
        });
        return tempItems
    }


    render() {
        return (
            <HouseContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </HouseContext.Provider>
        );
    }
}

const HouseConsumer = HouseContext.Consumer;

export { HouseProvider, HouseConsumer, HouseContext }