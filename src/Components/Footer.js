import Button from '../Components/Button';
import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    LET US HELP YOU FIND YOUR DREAM HOME
                </p>
                <p className="footer-subscription-text">
                    Get Notification 
                </p>
                <div className="input-areas">
                    <form>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="footer-input"
                        />
                        <Button src={"/home"} title={'Subscribe'}/>
                    </form>

                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it Works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/sign-up">Careers</Link>
                        
                        <Link to="/sign-up">Terms of Services</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to="/sign-up">Become Partner</Link>
                        <Link to="/">Become Investor</Link>
                        <Link to="/sign-up">Careers</Link>
                        <Link to="/sign-up">Investors</Link>
                        <Link to="/sign-up">Terms of Services</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Policy</h2>
                        {/* <Link to="/sign-up">How it Works</Link> */}
                        <Link to="/">Testimonials</Link>
                        {/* <Link to="/sign-up">Careers</Link> */}
                        <Link to="/sign-up">Investors</Link>
                        <Link to="/sign-up">Terms of Services</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>More</h2>
                        <Link to="/sign-up">List Your House</Link>
                        <Link to="/">Recommendations</Link>
                        <Link to="/sign-up">Rate our Service</Link>
                        <Link to="/sign-up">Suggest </Link>
                        <Link to="/sign-up">Join us</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="social-icons">
                        <Link className="social-icon-link "
                        to='/'
                        target="_blank"
                        aria-label = "facebook"
                        >
                            <FaFacebook/>
                        </Link>
                        <Link className="social-icon-link "
                        to='/'
                        target="_blank"
                        aria-label = "Instagram"
                        >
                            <FaInstagram/>
                        </Link>
                        <Link className="social-icon-link "
                        to='/'
                        target="_blank"
                        aria-label = "Linkedin"
                        >
                            <FaLinkedin/>
                        </Link>
                        <Link className="social-icon-link "
                        to='/'
                        target="_blank"
                        aria-label = "Youtube"
                        >
                            <FaYoutube/>
                        </Link>
                        <Link className="social-icon-link "
                        to='/'
                        target="_blank"
                        aria-label = "Twitter"
                        >
                            <FaTwitter/>
                        </Link>

                    </div>

                </div>

            </section>
        </div>
    )
}

export default Footer
