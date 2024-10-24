import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import "../../styles/dashboard.scss"


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='dashboard-layout'>
            <Sidebar />
            <Navbar />
            {children}
        </div>
    )
}

export default DashboardLayout