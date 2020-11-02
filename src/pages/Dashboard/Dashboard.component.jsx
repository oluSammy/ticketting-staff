import React from 'react';
import './Dashboard.styles.scss';
import Navbar from '../../component/Navbar/Navbar.component';
import Sidebar from './../../component/Sidebar/Sidebar.component';
import DashboardMain from '../DashboardMain/DashboardMain.component';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { selectSidebarState } from '../../Redux/user/user.selectors';


const Dashboard = () => {

    return (
        <div className="dashboard">
            <div className="dashboard__nav">
                <Navbar />
            </div>
            <div className="dashboard__sidebar" >
                <Sidebar />
            </div>
            <div className="dashboard__main">
                <DashboardMain />
            </div>
        </div>
    )
}

export default Dashboard;
