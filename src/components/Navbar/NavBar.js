import React, {useContext, Fragment} from 'react';
import NavButton from './NavButton';
// import {AuthContext} from '../Providers/AuthProvider'
import Splash from '../common/Splash';


const NavBar = (props) => {
  // const [auth] = useContext(AuthContext)

  return (
    <nav style={{
      display:'flex',
      backgroundColor: "#303030",
      position: "fixed",
      width: "100%",
      zIndex: 9999,
      top: 0,
      left: 0,
      flexDirection:'row',
      height: '60px'
    }}>
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '0em 1.2em'
      }}>
        <h1 style={{color: "#F1F1F1"}}><NavButton style={{}} to="/" label="Yum" /></h1>
      </div>
        <div style={{
          flex: 1,
          marginTop: "0em",
          display: "flex",
          flexDirection: "row",
          borderRadius: "70px 0px 0px 70px",
          background: "transparent",
          userSelect: "none",
          alignItems: 'center',
          padding: '0em 1.2em',
          justifyContent: 'flex-end', 
        }}>
          
          <NavButton style={{}} to="/chuck" label="Chucks" />
          <NavButton style={{}} to="/weather" label="Weather or Not" />
          {/* {auth.token ? (
            <Fragment>
              <NavButton style={{}} to='/address' label="address info" />
              <NavButton style={{}} to="/profile" label="profile" />
            </Fragment>
          ) : (
            <Fragment>
              <NavButton style={{}} to="/login" label="login" />
              <NavButton style={{}} to="/register" label="sign up" />
            </Fragment>
          ) } */}
          
        </div>
    </nav> 
  )
}

export default NavBar;;