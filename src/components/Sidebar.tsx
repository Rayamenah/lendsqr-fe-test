"use client"

import { business, customers, settings } from '@/utils/navigation';
import "../styles/sidebar.scss";

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {

    return (
        <div className={`container ${isOpen ? 'open' : ''}`}>
            <div className='nav-container'>
                <div className='logo'></div>
                <section>
                    <div className='nav-header'>
                        <div className='switch-org'>
                            <img src='/organization.svg' />
                            <div>Switch Organisation</div>
                            <img src='/chevron_down.svg' />
                        </div>
                        <div className='dashboard'>
                            <img src='/dashboard.svg' />
                            <div>Dashboard</div>
                        </div>
                        <div className='nav-menu'>
                            <div className='nav-submenu'>
                                <div className='nav-heading'>CUSTOMERS</div>
                                {customers?.map((child, i) => (
                                    <div key={i} className='nav-title'>
                                        <img src={child.icon} alt={child.icon} />
                                        <div>{child.title}</div>
                                    </div>
                                ))}
                                <div className='nav-heading'>BUSINESS</div>
                                {business?.map((child, i) => (
                                    <div key={i} className='nav-title'>
                                        <img src={child.icon} alt={child.icon} />
                                        <div>{child.title}</div>
                                    </div>
                                ))}
                                <div className='nav-heading'>SETTINGS</div>
                                {settings?.map((child, i) => (
                                    <div key={i} className='nav-title'>
                                        <img src={child.icon} alt={child.icon} />
                                        <div>{child.title}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className='sidebar-footer'>
                <img src='/logout.svg' />
                <span>Logout</span>
            </div>
            <div className='version'>v1.20</div>
        </div>
    );
};

export default Sidebar;
