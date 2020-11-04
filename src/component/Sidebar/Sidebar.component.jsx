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


const Sidebar = ({ currentUser, getUserDetail, userDetail, isGettingUserDetail }) => {

    useEffect(() => {
        const getUser = async () => {
            if(currentUser) await getUserDetail(currentUser.uid);
        }
        getUser();
    }, [getUserDetail, currentUser]);

    const closeSideBar = () => {
        // if(window.innerWidth < 580) {
        //     toggleSideBar();
        // }
    }

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
                <NavLink to="/" className="sidebar__link" onClick={closeSideBar} >
                    <AiFillHome className="sidebar__link-icon" />
                    <span>Home</span>
                </NavLink>
                <NavLink to="/raise-ticket" className="sidebar__link" activeClassName="sidebar__active" onClick={closeSideBar} >
                    <AiOutlineAppstoreAdd className="sidebar__link-icon" />
                    <span>Raise Ticket</span>
                </NavLink>
                <NavLink to="/pending" className="sidebar__link" activeClassName="sidebar__active" onClick={closeSideBar} >
                    <AiOutlineClockCircle className="sidebar__link-icon" />
                    <span>pending</span>
                </NavLink>
                <NavLink to="/resolved" className="sidebar__link" activeClassName="sidebar__active" onClick={closeSideBar} >
                    <BiCheckDouble className="sidebar__link-icon" />
                    <span>Resolved</span>
                </NavLink>
            </ul>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    getUserDetail: uid => dispatch(asyncGetUser(uid))
});

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    userDetail: selectUserDetail,
    isGettingUserDetail: selectIsGettingUserDetail
})



export default connect(mapStateToProps, mapDispatchToProps) (Sidebar);
