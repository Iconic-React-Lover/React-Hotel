import React, { Component } from 'react'
import { FaCat, FaDoorOpen, FaHome, FaSquarespace } from 'react-icons/fa';
import Title from "./Title";

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaDoorOpen />,
                title: "Outdoor Getaways",
                info: 'Escape, break, flight and a short holiday somewhere.'
            },
            {
                icon: <FaHome />,
                title: "Unique Stays",
                info: 'Stay all day long for a wonderful short vacation break.'
            },
            {
                icon: <FaSquarespace />,
                title: "Entire Homes",
                info: 'Enjoying and affording the lovely comforting warmth.'
            },
            {
                icon: <FaCat />,
                title: "Pets Allowed",
                info: 'Have soft, rounded body shapes join your vacation.'
            }
        ]
    };

    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return  ( 
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <h6>{item.info}</h6>
                        </article>
                        );
                        })}
                </div>
                </section>
        )
}
}
