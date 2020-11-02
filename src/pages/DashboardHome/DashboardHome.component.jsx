import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardHome.styles.scss';
import { AiOutlineClockCircle, AiOutlineAppstoreAdd } from 'react-icons/ai';
import { BiCalendarWeek } from 'react-icons/bi';

const DashboardHome = () => {
    return (
        <div className="dashboardHome">
            <div className="dashboardHome__container">
                <Link to="/raise-ticket" className="dashboardHome__box">
                    <div className="dashboardHome__box--header">
                        <div className="dashboardHome__box--title">Raise Ticket</div>
                        <AiOutlineAppstoreAdd className="dashboardHome__box--icon" />
                    </div>
                    <div className="dashboardHome__box--symbol">&#10021;</div>
                </Link>
                <Link to="/pending" className="dashboardHome__box">
                    <div className="dashboardHome__box--header">
                        <div className="dashboardHome__box--title">Pending</div>
                        <AiOutlineClockCircle className="dashboardHome__box--icon" />
                    </div>
                    <div className="dashboardHome__box--symbol">&#9775;</div>
                </Link>
                <Link to="/resolved" className="dashboardHome__box">
                    <div className="dashboardHome__box--header">
                        <div className="dashboardHome__box--title">Resolved</div>
                        <BiCalendarWeek className="dashboardHome__box--icon" />
                    </div>
                    <div className="dashboardHome__box--symbol">&#9854;</div>
                </Link>
            </div>
        </div>
    )
}

export default DashboardHome
