import React from 'react';
import './Navbar.styles.scss';
import { AiOutlineLogout, AiOutlineHome } from 'react-icons/ai';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from './../../firebase/firebase.utils';
import { toggleSidebar } from './../../Redux/user/user.actions';
import { selectSidebarState } from '../../Redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './../../Redux/user/user.selectors';

const Navbar = ({ isSidebarOpen, toggleSideBar, user  }) => {
    return (
        <div className="nav">
            <div className="nav__header">
                {user &&
                <>
                    {isSidebarOpen ?
                    <AiOutlineClose onClick={() => toggleSideBar()} className="nav__header-icon" /> :
                    <AiOutlineMenu onClick={() => toggleSideBar()} className="nav__header-icon" />}
                </>}
                <h1 className="nav__heading">Danbo International School</h1>
            </div>
            <ul className="nav__list">
                <Link to="/" className="nav__link">
                    <span>Home</span>
                    <AiOutlineHome className="nav__link-icon" />
                </Link>
                <li className="nav__link" onClick={() => auth.signOut()}>
                    <span>Sign out</span>
                    <AiOutlineLogout className="nav__link-icon" />
                </li>
            </ul>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    isSidebarOpen: selectSidebarState,
    user: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    toggleSideBar: () => dispatch(toggleSidebar())
})

export default connect(mapStateToProps, mapDispatchToProps) (Navbar);
