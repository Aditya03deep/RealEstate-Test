import React from 'react'
import Hero from '../Components/Hero'
import { Sliderdata } from '../data/SliderData'

function HomePage() {
    return (
        <div>
            <Hero slides={Sliderdata}/>
        </div>
    )
}

export default HomePage
