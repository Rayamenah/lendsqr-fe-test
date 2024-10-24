import React from 'react'
import { navigation } from '@/utils/navbar'
import "../styles/sidebar.scss"

const Sidebar = () => {
    return (
        <div className='container'>
            <div className='logo'><img src='./auth-logo.svg' alt='' /></div>
            <section>
                <div className='nav-header'>
                    <div className='switch-org'>
                        <img src='./organization.svg' />
                        <div>Switch Organisation</div>
                        <img src='./chevron_down.svg' />
                    </div>
                    <div className='dashboard'>
                        <img src='./dashboard.svg' />
                        <div>Dashboard</div>
                    </div>
                    <div className='nav-menu'>
                        {navigation.map((nav, navIndex) => (
                            <div key={navIndex} className='nav-submenu'>
                                <p className='nav-heading'>{nav.heading}</p>
                                {nav.children?.map((child, i) => (
                                    <div key={i} className='nav'>
                                        <img src={child.icon} alt={child.icon} />
                                        <div>{child.title}</div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Sidebar
