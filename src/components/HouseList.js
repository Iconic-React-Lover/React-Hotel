import React from 'react'
import Room from './House'

export default function HouseList(house) {
if(house.length === 0){
    return(
        <div className="empty-search">
            <h3>Unfortunately no house matche your search parameters</h3>
        </div>
    )
}
    return <section className="roomlist">
        <div className="houselist-center">
            {

            }
        </div>
        </section>
}
