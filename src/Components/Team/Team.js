import React from 'react';
import './Team.css';

function Team() {
  return (
      <><h3 className='offer'>Meet Our Team</h3>
    <div className='Team'>
        
        <div className='Team1'>
            <img  src='/Images/Dr.jpg' className='Team-img' />
            <p>Dr.Kimando Njogu</p>
            <p>CEO</p>
        </div>
        <div className='Team1'>
            <img src='/Images/jimmy.jpeg' className='Team-img'  />
            <p> Jimmy Njogu</p>
            <p>General Manager</p>
            <p>(Environmental Consultant)</p>
        </div>
        <div className='Team1'>
            <img src='/Images/sharon1.jpeg' className='Team-img' />
            <p>Sharon Wanjiru</p>
            <p>CFO</p>
        </div>
        <div className='Team1'>
            <img src='/Images/kamau.jpeg' className='Team-img' />
            <p>Cynthia Kamau</p>
            <p> Ass. Manager</p>
        </div>
      
    </div>
    </>
  )
}

export default Team;
