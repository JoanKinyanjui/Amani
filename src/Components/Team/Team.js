import React from 'react';
import './Team.css';

function Team() {
  return (
      <><h3 className='offer'>Meet Our Team</h3>
    <div className='Team'>
        
        <div className='Team1'>
            <img  src='/Images/kimando.jpg' className='Team-img' />
            <p>Lawrence Kimando</p>
            <p>Founder</p>
        </div>
        <div className='Team1'>
            <img src='/Images/jimmy.jpg' className='Team-img'  />
            <p> Jimmy Njogu</p>
            <p>Manager</p>
        </div>
        <div className='Team1'>
            <img src='/Images/sharon.jpg' className='Team-img' />
            <p>Sharon Wanjiru</p>
            <p> Ass Manager</p>
        </div>
      
    </div>
    </>
  )
}

export default Team;
