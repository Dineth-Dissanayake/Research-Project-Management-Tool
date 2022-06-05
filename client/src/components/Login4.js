import React, { useState, useEffect } from "react";
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ApiService4 from '../services/api.service4';

function Login4(props) {

  const [login4, setLogin4] = useState(true);
  const [loginErr4, setLoginErr4] = useState(false);
  const [signupErr4, setSignupErr4] = useState(false);
  const [userData, setUserData] = useState({email: '', password: ''});
  const [btnDisabled, setBtnDisabled] = useState(true);

  const doLogin4 = (e) => {
    e.preventDefault();
    if(login4) {
      ApiService4.login4(userData).then(resp => {
        success(resp, 'login4');
      }).catch(err => setLoginErr4(true));
    } else {
      ApiService4.register4(userData).then(resp => {
        success(resp, 'signup4');
      }).catch(err => setSignupErr4(true));
    }
  }

  const success = (resp, type) => {
    if(resp && resp.success)
      props.history.push('/dashboard4');
    else
      if(type === 'login4') setLoginErr4(true);
      else setSignupErr4(true);
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
          <Typography className="text-center" gutterBottom variant="h5" component="h4">
              {login4 ? '' : 'Sign up4'}
          </Typography>
          {login4 && loginErr4 ? <p className="login-err4">Email or Key Incorrect</p> : ''}
          {!login4 && signupErr4 ? <p className="login-err4">User already Exists!</p> : ''}
          <form noValidate autoComplete="off" onSubmit={doLogin4}>
            <div className="form-label"><label>EMAIL</label></div>
            <div>
              <TextField
                className="input-width"
                onChange={handleChange}
                name="email"
                placeholder="2023@sliit.lk"
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
            <Button role="submit" type="submit" onClick={doLogin4} disabled={btnDisabled} class="btn btn-dark" >
              {login4 ? ' Panel Member Enrollment' : ''}
            </Button>
          </form>
          <p className="text-center" onClick={()=> setLogin4(!login4)}><span className="toggle-form">{login4 ? '' : ''}</span></p>
      </CardContent>
    </Card>
    </div>
  );
}

export default withRouter(Login4);


