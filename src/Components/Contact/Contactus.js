import React from 'react';
import Footer from '../Footer/Footer';
import Contact from './Contact';
import './Contactus.css';

function Contactus(){
    return(
        <>
             
        <div className='Contact'>
        <img  className='array-img' src='/Images/amani2.jpg' />
            <div className='Contactus'>
                  <h3 className='call' >AMANI CARWASH </h3>
                <p className='call'>
                    <b >call: +254701435481</b>
                </p>
                <p className='call'><i class="fa fa-envelope fa-3x"></i></p>
                <p className='call'>
                <b>  email: amanicarwash100@gmail.com</b>
                </p>
                <p className='call'>
                    <i className="fab fa-facebook fa-2x  "></i>
                    <i className="fab fa-instagram-square fa-2x "></i>
                    <i className="fab fa-twitter-square fa-2x "></i>
                   
                </p>
            </div>
            <div className='array'>

        </div>
        </div>
        <Contact />
       <Footer />
        
            </>
    )
};
export default Contactus;