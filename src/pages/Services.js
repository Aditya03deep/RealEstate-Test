import React ,{useState} from 'react'
import Footer from '../Components/Footer'
import Listing from '../Components/Listing'
import '../styles/Services.css'
import {CardDataOne , CardDataTwo,CardDataThree} from '../data/All-List-Data/CardData';

function Services() {

    const[serachterm , setSearchterm] = useState(" ");

    return (
        <>
            <div className="Service-container">
                <div className="service-section">
                    <form className="service-input">
                        <input className="ser-int" type="text" placeholder="Enter City,State" onChange={event =>{setSearchterm(event.target.value)}}/>
                        <button type="submit">Search</button>
                    </form>
                    {/* {CardDataOne.filter((val)=>{
                        if (serachterm ==""){
                            return val
                        }else if(val.loc.toLowerCase().includes(serachterm.toLowerCase())){
                            return val
                        }
                    }).map((val,key)=>{
                        return(
                            <div className="searchData" key={key}>
                                {val.loc}
                            </div>
                        )
                    })} */}
                </div>
            </div>
            <div className="List-dimension">
                <Listing />
            </div>

            <Footer />
        </>
    )
}

export default Services
