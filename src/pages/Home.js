import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import FeaturedRoom from '../components/FeaturedRoom'
import Hero from '../components/Hero'
import Services from '../components/Services'

export const Home = () => {
    return (
        <>
            <Hero>
                <Banner 
                    title="luxirious rooms"
                    subtitle="deluxe room starting at $299"
                >
                    <Link to="/rooms/" className="btn-primary" >
                        Our Rooms
                    </Link>
                </Banner>
            </Hero>
            <Services ></Services>
            <FeaturedRoom />
        </>
    )
}
