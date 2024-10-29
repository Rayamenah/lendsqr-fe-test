import React from 'react'
import "../styles/navbar.scss"

const Navbar = ({ toggleDrawer, isOpen }: { isOpen: boolean, toggleDrawer: () => void }) => {
    return (
        <div className='navbar'>
            <button className="toggle-button" onClick={toggleDrawer}>
                {isOpen ? 'X' : 'Menu'}
            </button>
            <div className='logo'><img src='/auth-logo.svg' alt='' /></div>

            <div className='searchbox'>
                <input type="text" placeholder='Search for anything' />
                <div className='searchIcon'><img src='/search_icon.svg' /></div>
            </div>

            <p className='docs'>Docs</p>
            <img className='notification' src="/notification.svg" />
            <img className='avatar' src='/avatar.svg' />
            <p>Adedeji</p>
            <img className='chevron' src='/chevron_down.svg' />
        </div>
    )
}

export default Navbar