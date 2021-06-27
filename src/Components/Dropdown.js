import React from 'react';
import { MenuData } from '../data/MenuData';
import '../styles/Dropdown.css';
import Button from './Button';
import {Link} from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

function Dropdown() {
    return (
        <div className="DropdownContainer">
            <div className="Icons">
                <div classname="CloseIcon">
                    <FaTimes/>
                </div>
            </div>
            <div className="DropdownWrapper">
                <div className="DropdownMenu">
                    {MenuData.map((item,index)=>(
                        <div className="DropdownLink">
                        <Link className="menu-link" key={index} to={item.link}>
                            {item.title}
                        </Link>
                        </div>
                    ))}
                </div>
                <div className="btnwrap">
                    <Button src={"/contact"} title={'Conatct Us'}/>

                </div>

            </div>

            
        </div>
    )
}

export default Dropdown
