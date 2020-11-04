import './App.scss';
import Dashboard from './pages/Dashboard/Dashboard.component';
import LoginPage from './pages/LoginPage/LoginPage.components';
import { useEffect } from 'react';
import { setUser } from './Redux/user/user.actions';
import { connect } from 'react-redux';
import { auth } from './firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './Redux/user/user.selectors';

function App({ setUser, currentUser }) {

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user)
    })
  }, [setUser]);

  return (
    <div>
      {currentUser ? <Dashboard /> : <LoginPage />}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps) (App);
