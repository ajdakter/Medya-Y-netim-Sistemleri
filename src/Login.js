alert('A name was submitted: ' + this.state.value);
import React, { useState } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap"
import contactData from "./contactData"
import MainPage from "./MainPage"
import ReactDOM from 'react-dom';
import EditExercise from './components/edit-exercise.component';


class Login extends React.Component {

  constructor() {
    super()
    this.state = {
      message: "",
      username: "",
      password: ""
    }
    this.handleClick = this.handleClick.bind(this)
    this.setUsername = this.setUsername.bind(this)
    this.setPassword = this.setPassword.bind(this)
  }

  setUsername(e) {
    this.setState({ username: e.target.value });
  }

  setPassword(e) {
    this.setState({ password: e.target.value });
  }
  handleClick() {
    this.setState({ message: "" })
    var i = 0;
    const contacts = EditExercise.state.users;

 

    contacts.forEach(element => {

      if (this.state.username === contacts[i].username && this.state.password === contacts[i].password) {
        //ReactDOM.render(<MainPage />, document.getElementById('root'));

      }
      else {
        this.setState({ message: "Kullanıcı adı veya Şifre hatalı!" })
      }
      i++
    });

  }
  render() {

    return (
      <div className="Login">
        <h1> Giriş Yap </h1><br></br><br></br>
        <FormGroup controlId="email" bsSize="large">
          <h3>Kullanıcı Adı</h3>
          <FormControl
            autoFocus
            type="text"
            name="usernameInput"
            onChange={this.setUsername}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <h3>Şifre</h3>
          <FormControl
            type="password"
            name="passwordInput"
            onChange={this.setPassword}
          />
        </FormGroup>
        <Button className="LoginButton" onClick={this.handleClick}> Giriş Yap </Button>
        <p>{this.state.message}</p>
      </div>
    )
  }

} export default Login