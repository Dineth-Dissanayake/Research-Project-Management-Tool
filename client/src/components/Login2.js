import React, { useState, useEffect } from "react";
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ApiService2 from '../services/api.service2';

function Login2(props) {

  const [login2, setLogin2] = useState(true);
  const [loginErr2, setLoginErr2] = useState(false);
  const [signupErr2, setSignupErr2] = useState(false);
  const [userData, setUserData] = useState({email: '', password: ''});
  const [btnDisabled, setBtnDisabled] = useState(true);

  const doLogin2 = (e) => {
    e.preventDefault();
    if(login2) {
      ApiService2.login2(userData).then(resp => {
        success(resp, 'login2');
      }).catch(err => setLoginErr2(true));
    } else {
      ApiService2.register2(userData).then(resp => {
        success(resp, 'signup2');
      }).catch(err => setSignupErr2(true));
    }
  }

  const success = (resp, type) => {
    if(resp && resp.success)
      props.history.push('/dashboard2');
    else
      if(type === 'login2') setLoginErr2(true);
      else setSignupErr2(true);
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
          <Typography  gutterBottom variant="h5" component="h2">
              {login2 ? '' : 'Sign up2'}
          </Typography>
          {login2 && loginErr2 ? <p className="login-err2">Email or Enrolledment Key is  Incorrect</p> : ''}
          {!login2 && signupErr2 ? <p className="login-err2">User already Exists!</p> : ''}
          <form noValidate autoComplete="off" onSubmit={doLogin2}>
            <div className="form-label"><label>SLIIT EMAIL</label></div>
            <div>
              <TextField
                className="input-width"
                onChange={handleChange}
                name="email"
                placeholder="IT2022@gmail.com"
                size="small"
                variant="outlined"
                required
              />
            </div>
            <br></br>
            <div className="form-label"><label>ENROLLED KEY</label></div>
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
            <Button role="submit" type="submit" onClick={doLogin2} disabled={btnDisabled} className="btn btn-primary"  variant="outlined" size="medium">
              {login2 ? 'supervisor enrollment' : ''}
            </Button>
          </form>
          <p className="text-center" onClick={()=> setLogin2(!login2)}><span className="toggle-form">{login2 ? '' : 'Are You Submitted  already? Click here'}</span></p>
      </CardContent>
    </Card>
    </div>
  );
}

export default withRouter(Login2);
