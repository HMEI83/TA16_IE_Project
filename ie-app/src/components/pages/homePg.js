import React from 'react';
import '../../App.css';
import { Button2 } from '../general/Button';
import InfoSection from './infoSection/infos';
import { aboutObj, lifeObj, learnObj, socialObj } from './infoSection/data';
import homebg from '../../images/home.jpg'

export default function Home() {
  return (
    <>
    <img className='homebg' src={homebg} alt='home'/>
      <div className='home'>
        <h1>
          <span id="home-content1">Start A New Journey in Victoria</span>
        </h1>
        <h1>
          <span id="home-content2">
          As an International Student
          </span>
      </h1>
      </div>
      <InfoSection {...aboutObj} />
      <InfoSection {...lifeObj} />
      <InfoSection {...learnObj} />
      <InfoSection {...socialObj} />
    </>
  );
}
