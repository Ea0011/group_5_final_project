import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import { Link, Redirect } from 'react-router-dom'
import { Typography, IconButton } from '@material-ui/core';
import Person from "@material-ui/icons/Person";
import PersonAdd from '@material-ui/icons/PersonAdd';
import AddCircle from '@material-ui/icons/AddCircle';
import { connect } from 'react-redux';
import * as userActions from '../actions/user';

const styles = {
  links: {
      textDecoration: "none", color: "inherit"
  }
}

class NavBar extends React.PureComponent {
  state = {
    redirect: false
  }

  async componentDidMount() {
    if (!this.props.user && window.localStorage.getItem("Authorization")) {
      const headers = new Headers();
      headers.append("Authorization", window.localStorage.getItem("Authorization"));
      const params = { method: 'GET', headers };
      const userRequest = await fetch("http://localhost:3000/current", params);
      const response = await userRequest.json();
      if (!userRequest.ok || response.message === "Invalid Token") {
        this.setState({ redirect: true });
      } else {
        const { id, fname, lname, super_user } = response;
        this.props.setUser({ id, fname, lname, super_user });
      }
    }
  }
  logout = async() =>{
    try {
      const headers = new Headers();
      headers.append("Authorization", window.localStorage.getItem("Authorization"));
      const params = { method: 'DELETE', headers};
      const request = await fetch("http://localhost:3000/logout", params);
      window.localStorage.removeItem("Authorization");
    } catch(e) {
      alert("Something went wrong, please try again");
    }
  }

  handleClick = () => {
   this.logout();
  }

  render() {
    let navigation
    if (this.props.currentUser) {
      navigation = this.props.currentUser.super_user ? 
      <>
        <Link to='/login' style={styles.links}>
          <IconButton onClick={this.handleClick} >
            <Avatar>{this.props.currentUser.fname[0]}{this.props.currentUser.lname[0]}</Avatar>
          </IconButton>
        </Link>
        <Link to='/admins' style={styles.links}>
          <IconButton>
            <Person />
          </IconButton>
        </Link>
        <Link to='/doctors' style={styles.links}>
          <IconButton>
            <PersonAdd />
          </IconButton>
        </Link>
      </> : 
      <>  
      <IconButton onClick={this.handleClick} >
      <Avatar>{this.props.currentUser.fname[0]}{this.props.currentUser.lname[0]}</Avatar>
      </IconButton>
      <Link to='/newpatient' style={styles.links}>
        <IconButton>
          <PersonAdd />
        </IconButton>
      </Link>
      <Link to='/newprocedure' style={styles.links}>
        <IconButton>
          <AddCircle />
        </IconButton>
      </Link>
    </>
    } else {
      navigation = (
        <>
          <Link to='/login' style={styles.links}>
            <Button>
              Login
            </Button>
          </Link>
        </>
      )
    }
    return(
      <React.Fragment>
        <AppBar position="static" color="default">
          <ToolBar>
            <Typography style={{flexGrow: 1}} variant="h6" color="inherit">
              <Link to='/' style={{textDecoration: "none", color: "inherit"}}>
                <Button color="inherit" size="medium">Jhon Hopkins</Button>
              </Link>
            </Typography>
            {
              this.state.redirect ? <Redirect to='/login'/> : navigation
            }
          </ToolBar>
        </AppBar>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.users
})

const mapDispatchToProps = dispatch => ({
  setUser: (user) => { dispatch(userActions.setUser(user)) } 
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);