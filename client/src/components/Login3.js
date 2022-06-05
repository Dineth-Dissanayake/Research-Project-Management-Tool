import React, { useState, useEffect } from "react";
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ApiService3 from '../services/api.service3';

function Login3(props) {

  const [login3, setLogin3] = useState(true);
  const [loginErr3, setLoginErr3] = useState(false);
  const [signupErr3, setSignupErr3] = useState(false);
  const [userData, setUserData] = useState({email: '', password: ''});
  const [btnDisabled, setBtnDisabled] = useState(true);

  const doLogin3 = (e) => {
    e.preventDefault();
    if(login3) {
      ApiService3.login3(userData).then(resp => {
        success(resp, 'login3');
      }).catch(err => setLoginErr3(true));
    } else {
      ApiService3.register3(userData).then(resp => {
        success(resp, 'signup3');
      }).catch(err => setSignupErr3(true));
    }
  }

  const success = (resp, type) => {
    if(resp && resp.success)
      props.history.push('/adminpanel');
    else
      if(type === 'login3') setLoginErr3(true);
      else setSignupErr3(true);
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
          <Typography className="text-center" gutterBottom variant="h5" component="h3">
              {login3 ? '' : 'Sign up3'}
          </Typography>
          {login3 && loginErr3 ? <p className="login-err3">Email or Key Incorrect</p> : ''}
          {!login3 && signupErr3 ? <p className="login-err3">User already Exists!</p> : ''}
          <form noValidate autoComplete="off" onSubmit={doLogin3}>
            <div className="form-label"><label>SLIIT EMAIL</label></div>
            <div>
              <TextField
                className="input-width"
                onChange={handleChange}
                name="email"
                placeholder="Admin@sllit.lk"
                size="small"
                variant="outlined"
                required
              />
            </div>
            <br></br>
            <div className="form-label"><label>Enrolled Key</label></div>
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
            <Button role="submit" type="submit" onClick={doLogin3} disabled={btnDisabled} class="btn btn-dark" >
              {login3 ? ' Admin Enrollment' : ''}
            </Button>
          </form>
          <p className="text-center" onClick={()=> setLogin3(!login3)}><span className="toggle-form">{login3 ? '' : ''}</span></p>
      </CardContent>
    </Card>
    </div>
  );
}

export default withRouter(Login3);


