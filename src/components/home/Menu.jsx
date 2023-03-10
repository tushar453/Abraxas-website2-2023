import React from 'react'
import Atom from './Atom.jsx'
import '../../styles/home/menu.css'
// import { WiMoonAltFull, WiMoonAltWaningGibbous1 } from 'react-icons/wi'

import MoonPhase1 from '../../assets/images/moon-phase-1.png'
import MoonPhase2 from '../../assets/images/moon-phase-2.png'
import MoonPhase3 from '../../assets/images/moon-phase-3.png'
import MoonPhase4 from '../../assets/images/moon-phase-4.png'
import MoonPhase5 from '../../assets/images/moon-phase-5.png'
import MoonPhase6 from '../../assets/images/moon-phase-6.png'
import MoonPhase7 from '../../assets/images/moon-phase-7.png'
import MoonPhase8 from '../../assets/images/moon-phase-8.png'

const homepage = () => {
  return (
    <div className='container'>
        <div className="img">
          <div className="menu-icons">
            <div className="moon-icons" style={{'--i': 1}}>
              <img src={MoonPhase1} alt="" width='70px' height='70px' />
            </div>
            <div className="moon-icons" style={{'--i': 2}}>
              <img src={MoonPhase2} alt="" width='70px' height='70px' />
            </div>
            <div className="moon-icons" style={{'--i': 3}}>
              <img src={MoonPhase3} alt="" width='70px' height='70px' />
            </div>
            <div className="moon-icons" style={{'--i': 4}}>
              <img src={MoonPhase4} alt="" width='70px' height='70px' />
            </div>
            <div className="moon-icons" style={{'--i': 5}}>
              <img src={MoonPhase5} alt="" width='70px' height='70px' />
            </div>
            <div className="moon-icons" style={{'--i': 6}}>
              <img src={MoonPhase6} alt="" width='70px' height='70px' />
            </div>
            <div className="moon-icons" style={{'--i': 7}}>
              <img src={MoonPhase7} alt="" width='70px' height='70px' />
            </div>
            <div className="moon-icons" style={{'--i': 8}}>
              <img src={MoonPhase8} alt="" width='70px' height='70px' />
            </div>
          </div>
          <div className="atom-icon">
            <Atom/>
          </div>
        </div>
    </div>
  )
}

export default homepage
