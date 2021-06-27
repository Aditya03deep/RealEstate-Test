import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import { MenuData } from '../data/MenuData';
import Button from '../Components/Button';
import logo from '../Images/logo.jpg';
import '../styles/Navbar.css';
import '../styles/Button.css';

function Navbar() {

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
       if(window.scrollY >= 300){
         setColorchange(true);
       }
       else{
         setColorchange(false);
       }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return (
        <>
            <div className={colorChange ? 'Navbar colorChange' : 'Navbar'}>
                <div className="logo">
                    <div className="logo-img">
                        <Link to="/">
                            <img src={logo} alt="logo" className="logo-img"/>
                        </Link>


                    </div>

                </div>
                <div className="Nav-menu">
                    <div className="menu-items">
                        {MenuData.map((item, index) => (

                            <Link to={item.link} key={index} className="menu-links">
                                {item.title}
                            </Link>

                        ))}

                    </div>
                </div>
                <div className="NavBtn">
                    <Button src={'/contact'} title={'Contact Us'} />
                </div>
            </div>

        </>
    )
}

export default Navbar
