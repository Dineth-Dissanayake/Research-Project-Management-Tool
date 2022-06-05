import React, { useState, useEffect } from "react";
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ApiService5 from '../services/api.service5';

function Login5(props) {

  const [login5, setLogin5] = useState(true);
  const [loginErr5, setLoginErr5] = useState(false);
  const [signupErr5, setSignupErr5] = useState(false);
  const [userData, setUserData] = useState({email: '', password: ''});
  const [btnDisabled, setBtnDisabled] = useState(true);

  const doLogin5 = (e) => {
    e.preventDefault();
    if(login5) {
      ApiService5.login5(userData).then(resp => {
        success(resp, 'login5');
      }).catch(err => setLoginErr5(true));
    } else {
      ApiService5.register5(userData).then(resp => {
        success(resp, 'signup5');
      }).catch(err => setSignupErr5(true));
    }
  }

  const success = (resp, type) => {
    if(resp && resp.success)
      props.history.push('/dashboard5');
    else
      if(type === 'login5') setLoginErr5(true);
      else setSignupErr5(true);
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  useEffect(() => {
    let disable = (!userData.email || !userData.password) ? true : false;
    setBtnDisabled(disable);
  }, [userData]);

  return (
    <div className="form-container">
      <Card>
        <CardContent>
          <Typography className="text-center" gutterBottom variant="h5" component="h5">
              {login5 ? 'Student Enrollment' : 'Sign up5'}
          </Typography>
          {login5 && loginErr5 ? <p className="login-err5">Email or Password Incorrect</p> : ''}
          {!login5 && signupErr5 ? <p className="login-err5">User already Exists!</p> : ''}
          <form noValidate autoComplete="off" onSubmit={doLogin5}>
            <div className="form-label"><label>SLIIT EMAIL</label></div>
            <div>
              <TextField
                className="input-width"
                onChange={handleChange}
                name="email"
                placeholder="IT20135610@my.sliit.lk"
                size="small"
                variant="outlined"
                required
              />
            </div>
            <br></br>
            <div className="form-label"><label>Key</label></div>
            <div>
              <TextField
                className="input-width"
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="********"
                size="small"
                variant="outlined"
                required
              />
            </div>
            <br></br>
            <Button role="submit" type="submit" onClick={doLogin5} disabled={btnDisabled} class="btn btn-dark" >
              {login5 ? ' Student Enrollment' : ''}
            
            </Button>
          </form>
          <p className="text-center" onClick={()=> setLogin5(!login5)}><span className="toggle-form">{login5 ? '' : ''}</span></p>
      </CardContent>
    </Card>
    </div>
  );
}

export default withRouter(Login5);


