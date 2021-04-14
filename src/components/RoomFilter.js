import React from 'react'
import {useContext} from 'react'
import {Title} from '../components/Title'
import { RoomContext } from '../context'

const getUnique= (items,value) =>{
    return [...new Set(items.map(item =>item[value]))];
}

export const RoomFilter = ({rooms}) => {
    const context= useContext(RoomContext);
    const {handleChange, type,capacity,price,minPrice,maxPrice,
    minSize, maxSize,breakfast,pets} = context;
    let types= getUnique(rooms, 'type');
    let people= getUnique(rooms,'capacity');

    types = ['all',...types];
    types=types.map((item,index) =>{
            return (
                
                <option key={index}  value={item} > {item} </option>
            )
        });

    people= [...people];
    people= people.map( (item,index) =>{
        return (
            <option key={index} value={item} > {item} </option>
        )
    })
    
    return (
        <section className="filter-container" >
            <Title title="search rooms" />
            <form className="filter-form" >
                <div className="form-group" >
                    <label htmlFor="type" >room type</label>
                    <select
                        name="all"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>

                <div className="form-group" >
                    <label htmlFor="capacity" >Guest</label>
                    <select
                        name="1"
                        id="capacity"
                        value={capacity}
                        className="form-control"
                        onChange={handleChange}
                    >
                    {people}
                    </select>
                </div>

                <div className="form-group" >
                    <label htmlFor="price" >room price ${price} </label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} 
                    id="price" value={price} onChange={handleChange} className="form-control"  />
                </div>

                <div className="form-group" >
                    <label htmlfor="size" >room size</label>
                    <div className="size-inputs" >
                        <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />
                        <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input" />
                    </div>
                </div>

                <div className="form-group" >
                    <div className="single-extra" >
                        <input 
                        type="checkbox"
                        name="breakfast"
                        id="breakfast"
                        // checked={breakfast}
                        onChange={handleChange}  />
                        <label htmlFor= "breakfast">breakfast</label>
                    </div>
                    <div className="single-extra" >
                        <input 
                        type="checkbox"
                        name="pets"
                        id="pets"
                        // checked={pets}
                        onChange={handleChange}  />
                        <label htmlFor= "pets">pets</label>
                    </div>
                </div>
            </form>
        </section>
    )
}
