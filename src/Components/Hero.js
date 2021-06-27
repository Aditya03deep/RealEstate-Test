import React, { useState, useRef } from 'react'
import '../styles/Hero.css';
import { IconContext } from "react-icons";
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import Button from '../Components/Button';



function Hero({ slides }) {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    };

    return (
        <IconContext.Provider value={{ size: "1.5em" }}>
            <div className="HeroSection">
                <div className="HeroWrapper">
                    {slides.map((slide, index) => {
                        return (
                            <div className="HeroSlide" key={index}>
                                {index === current && (
                                    <div className="HeroSlider">
                                        <img src={slide.image} alt={slide.alt} className="img-bg" />
                                        <div className="HeroImage">

                                            <div className="HeroContent">
                                                <h1>{slide.title}</h1>
                                                <p>{slide.price}</p>
                                                <Button src={slide.path} title={'View Home'} />
                                            </div>

                                        </div>

                                    </div>
                                )}

                            </div>
                        )
                    })}
                    <div className="arrow">
                        <div className="prev" onClick={prevSlide}>
                            <IoArrowBack />
                        </div>
                        <div className="forward" onClick={nextSlide}>
                            <IoArrowForward />
                        </div>

                    </div>

                </div>
            </div>
        </IconContext.Provider>
    )
}

export default Hero
