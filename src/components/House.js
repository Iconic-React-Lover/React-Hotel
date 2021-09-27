import React from 'react'
import { Link } from "react-router-dom"
import defaultImg from "../images/room-1.jpeg"


export default function House({ house }) {
    const { name, slug, images, price } = house;

    return (
        <article className="house">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="single house" />
            </div>

            <div className="price-top">
                <h6>
                   ${price} 
                </h6>
                <p>per night</p>
            </div>
            <Link to={'/house/${slug}'}
            className="btn-primary house-link">Features</Link>
        </article >
    );
}
