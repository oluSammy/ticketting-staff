import React, { useEffect } from 'react';
import './Sidebar.styles.scss';
import { BiUser, BiCheckDouble } from 'react-icons/bi';
import { AiFillHome, AiOutlineClockCircle, AiOutlineAppstoreAdd } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { asyncGetUser } from '../../Redux/user/user.actions';
import Loader from 'react-loader-spinner';
import { selectCurrentUser, selectUserDetail, selectIsGettingUserDetail } from './../../Redux/user/user.selectors';
import { toggleSidebar } from './../../Redux/user/user.actions';


const Sidebar = ({ currentUser, getUserDetail, userDetail, isGettingUserDetail, toggleSidebar }) => {

    useEffect(() => {
        const getUser = async () => {
            if(currentUser) await getUserDetail(currentUser.uid);
        }
        getUser();
    }, [getUserDetail, currentUser]);

    const closeSideBar = () => {
        if(window.innerWidth < 580) {
            toggleSidebar();
        }
    }

    const sidebarLinks = [
        {
            link: '/',
            icon: <AiFillHome className="sidebar__link-icon" />,
            text: 'Home'
        },
        {
            link: '/raise-ticket',
            icon: <AiOutlineAppstoreAdd className="sidebar__link-icon" />,
            text: 'Raise Ticket'
        },
        {
            link: '/pending',
            icon: <AiOutlineClockCircle className="sidebar__link-icon" />,
            text: 'Pending'
        },
        {
            link: '/resolved',
            icon: <BiCheckDouble className="sidebar__link-icon" />,
            text: 'Resolved'
        }
    ];


    return (
        <div className="sidebar">
            <div className="sidebar__user">
                <div className="sidebar__user--bg">
                    <BiUser className="sidebar__user--icon"/>
                </div>
                <div>
                    {isGettingUserDetail ?
                        <div className="sidebar__user--text" style={{marginTop: '1.3rem'}}>
                            <Loader
                                type="Oval"
                                color="#FFFFFF"
                                height={30}
                                width={30}
                            />
                        </div> : userDetail &&
                        <>
                            <p className="sidebar__user--text sidebar__user--name">{userDetail.designation}</p>
                            <p className="sidebar__user--text sidebar__user--designation">
                                {userDetail.surname} {userDetail.firstName}
                            </p>
                        </>
                    }
                </div>
            </div>
            <ul className="sidebar__list">
                {sidebarLinks.map(link =>
                    <NavLink to={link.link} className="sidebar__link" onClick={closeSideBar} >
                        {link.icon}
                        <span>{link.text}</span>
                    </NavLink>
                )}
            </ul>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    getUserDetail: uid => dispatch(asyncGetUser(uid)),
    toggleSidebar: () => dispatch(toggleSidebar())
});

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    userDetail: selectUserDetail,
    isGettingUserDetail: selectIsGettingUserDetail
})



export default connect(mapStateToProps, mapDispatchToProps) (Sidebar);
