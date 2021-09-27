import React, { Component } from 'react'
import defaultBcg from '../components/Hero'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { HouseContext } from '../context'

export default class SingleHouse extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
          slug: this.props.match.params.slug,
          defaultBcg: defaultBcg
        };
      }
      static contextType = HouseContext;

      render() {
        const { getHouse } = this.context;
        const house = getHouse(this.state.slug);
    
        if (!house) {
          return (
            <div className="error">
              <h3> no such house could be found...</h3>
              <Link to="/house" className="btn-primary">
                back to house
              </Link>
            </div>
          );
        }
        const {
          name,
          description,
          capacity,
          size,
          price,
          extras,
          breakfast,
          pets,
          images
        } = house;
        const [main, ...defaultImages] = images;
        console.log(defaultImages);
    
        return (
          <>
            <StyledHero img={images[0] || this.state.defaultBcg}>
              <Banner title={`${name} house`}>
                <Link to="/house" className="btn-primary">
                  back to house
                </Link>
              </Banner>
            </StyledHero>
            <section className="single-house">
              <div className="single-house-images">
                {defaultImages.map((item, index) => (
                  <img key={index} src={item} alt={name} />
                ))}
              </div>
              <div className="single-house-info">
                <article className="desc">
                  <h3>details</h3>
                  <p>{description}</p>
                </article>
                <article className="info">
                  <h3>info</h3>
                  <h6>price : ${price}</h6>
                  <h6>size : {size} SQFT</h6>
                  <h6>
                    max capacity :
                    {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                  </h6>
                  <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                  <h6>{breakfast && "free breakfast included"}</h6>
                </article>
              </div>
            </section>
            <section className="house-extras">
              <h6>extras </h6>
              <ul className="extras">
                {extras.map((item, index) => (
                  <li key={index}>- {item}</li>
                ))}
              </ul>
            </section>
          </>
        );
      }
    }
