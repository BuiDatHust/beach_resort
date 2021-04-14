import React from 'react'
import Room from './Room'
export const RoomList = ({rooms}) => {
    if(rooms.length==0){
        <div className="empty-search" >
            <h3>unfortunately no rooms matched your search</h3>
        </div>
    }
    
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    rooms.map(item =>{
                        return <Room key={item.id} room={item} />
                    })
                }
            </div>
        </section>
    )
}
