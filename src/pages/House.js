import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import {Link} from 'react-router-dom'

const House = () => {
    return ( <Hero hero ="houseHero">
        <Banner title="our bnb">
            <Link to='/' className="btn-primary">
                return home
            </Link>
        </Banner>
        </Hero>

);
};

export default House;