"use client"
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React, { useState } from 'react'
import "../../styles/dashboard.scss"


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='dashboard-layout'>
            <Sidebar isOpen={isOpen} />
            <Navbar toggleDrawer={toggleDrawer} isOpen={isOpen} />
            <div className='page-container'>
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout