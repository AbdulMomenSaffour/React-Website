import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping, faCommentDots ,faBell ,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

import  Plant  from '../asstes/images/Plant.png';
import Ellipse from '../asstes/images/Ellipse.png';


export default function NavBar() {
  return (
    <div className="navbar">
        <div className='container'>
        <h2 className='logo'>Plantea</h2>
        <div className='vv'>
            <form className='searchBar'>
            <FontAwesomeIcon icon={faMagnifyingGlass}  className='search-icon'/>
            <input type='search' placeholder='Cari Barangmu Disini!'/>
            </form>
            <ul className='links'> 
                <li><a href='#buy'><FontAwesomeIcon icon={faCartShopping} /></a></li>
                <li><a href='#chat'><FontAwesomeIcon icon={faCommentDots} /></a></li>
                <li><a href='#notification'><FontAwesomeIcon icon={faBell} /></a></li>
            </ul>
        </div>

        <div className='memberInfo'>
            <div className='personalInfo'>
                <h4>Halo, Arlo Mahardyan</h4>
                <div className='membership'>
                <p>Gold Member</p>
                <img src={Plant}/>
                </div>
            </div>
            <img src={Ellipse} className='personalImg'/>
        </div>
        </div>
    </div>
  )
}
