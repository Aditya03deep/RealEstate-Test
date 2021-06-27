import React from 'react'
import Footer from '../Components/Footer';
import '../styles/About.css';

import Button from '../Components/Button';

function About() {
    return (
        <>

            <div className="About-container">
                <div className="About-Section">

                    <div className="about-left">
                        <div className="abt-content">
                            <h1>KNOW MORE <span> ABOUT US</span></h1>
                        </div>
                    </div>
                    <div className="about-right">

                        <p>We are a group of young enthusiast people who are interested both in Real Estate and Web Development.
                            We provide you with best quality of Home with Interior well furnished and many more.
                            This Site is still under construction and will be finished within a few months.
                            And then it will be available for buying and selling House.
                        </p>
                        <Button src={'/signup'} title={'Know More'} className="hover" />
                    </div>

                </div>


            </div>
            <Footer />
        </>
    )
}

export default About
