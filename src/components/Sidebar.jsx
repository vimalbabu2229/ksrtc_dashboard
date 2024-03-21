import React from 'react'
import { Link } from 'react-router-dom'

import './Sidebar.css'
import schedules from '../assets/schedules.png'
import buses from '../assets/buses.png'
import employees from '../assets/employees.png'
import route from '../assets/route.png'
import settings from '../assets/settings.png'
import logout from '../assets/logout.png'

function Sidebar() {
    return (
        <nav>
            <div>
                <Link to="/" >
                    <img src={schedules} alt="shedules-icon" />
                    Schedules
                </Link>
                <Link to="/employees" >
                    <img src={employees} alt="employees-icon" />
                    Employees
                </Link>                
                <Link to="/buses" >
                    <img src={buses} alt="buses-icon" />
                    Buses
                </Link>
                <Link to="/deporoutes" >
                    <img src={route} alt="route-icon" />
                    DepoRoutes
                </Link>
            </div>
            <div>
                <Link to="/" >
                    <img src={settings} alt="settings-icon" />
                    Settings
                </Link>
                <Link to="/" >
                    <img src={logout} alt="logout-icon" />
                    Logout
                </Link>
            </div>
        </nav>
    )
}

export default Sidebar