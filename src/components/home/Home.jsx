import React from 'react'
import Menu from '../home/Menu'
import '../../styles/home/home.css'
import NimbusLogo from '../../assets/images/NimbusLogo.png';

const Home = () => {
  return (
    <div className='homeContainer'>
      <div className="homeCard">
        <nav className='header'>
          <img src={NimbusLogo} alt="Nimbus Logo" width='345px' height='389px'
          className='nimbusLogo' />
          <div className='teamAbraxas'>Team Abraxas</div>
        </nav>
        <Menu/>
      </div>
    </div>
  )
}

export default Home
