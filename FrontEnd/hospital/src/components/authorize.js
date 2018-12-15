import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { setUser } from '../actions/user';
import Grid from '@material-ui/core/Grid'
import { Redirect } from 'react-router-dom';

class Authorize extends React.PureComponent {
  state = {
    email: '',
    password: '',
    redirect: false
  }

  login = async(email, password) => {
    try {
      const form = new FormData();
      form.append("email", email);
      form.append("password", password);
      const params = { method: 'POST', body: form };
      const authorize = await fetch("http://localhost:3000/login", params);
      const response = await authorize.json();
      if (!authorize.ok && response.message === "Invalid Credentials") {
        alert("Invalid Credentials!")
      } else {
        const { id, super_user, fname, lname, authentication_token } = response;
        this.props.setUser({ id, super_user, fname, lname });
        console.log(authentication_token);
        window.localStorage.setItem("Authorization", authentication_token);
        this.setState({ redirect: true });
      }
    } catch(e) {
      alert("Something went wrong, please try again");
    }
  }

  handleClick = () => {
    const { email, password } = this.state
    if (email && password) {
      this.login(email, password);
    } else {
      alert("All fields are mandatory");
    }
  }

  render() {
    return(
      this.state.redirect ? <Redirect to='/' /> :
      <div>
        <Grid container direction="column" alignItems="center">
          <TextField 
            hint="Enter Your e-mail"
            label="Email"
            onChange={(e) => { this.setState({ email: e.target.value }) }} />
          <TextField 
            hint="Enter Your password"
            label="Password"
            onChange={(e) => { this.setState({ password: e.target.value }) }}
            type="password" />
          <Button
            primary="true"
            onClick={(e) => { this.handleClick() }}>Submit</Button>
        </Grid>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({ setUser: (user) => { dispatch(setUser(user)) } });

export default connect(null, mapDispatchToProps)(Authorize);