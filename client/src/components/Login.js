import React, { useState, useEffect } from "react";
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ApiService from '../services/api.service';

function Login1(props) {

  const [login1, setLogin1] = useState(true);
  const [login1Err, setLogin1Err] = useState(false);
  const [signup1Err, setSignup1Err] = useState(false);
  const [userData, setUserData] = useState({email: '', password: ''});
  const [btnDisabled, setBtnDisabled] = useState(true);

  const doLogin1 = (e) => {
    e.preventDefault();
    if(login1) {
      ApiService.login1(userData).then(resp => {
        success(resp, 'login1');
      }).catch(err => setLogin1Err(true));
    } else {
      ApiService.register1(userData).then(resp => {
        success(resp, 'signup1');
      }).catch(err => setSignup1Err(true));
    }
  }

  const success = (resp, type) => {
    if(resp && resp.success)
      props.history.push('/dashboard');
    else
      if(type === 'login1') setLogin1Err(true);
      else setSignup1Err(true);
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
          <Typography className="text-center"  gutterBottom variant="h5" component="h2">
              {login1 ? '' : 'Upload Group Leader Email And Group ID'}
          </Typography>
          <h4 className="text-center" >Upload Submission</h4>
          <h4 className="text-center" >.</h4>
          {login1 && login1Err ? <p className="login-err">Email or Password Incorrect</p> : ''}
          {!login1 && signup1Err ? <p className="login-err">User already Exists!</p> : ''}
          <form noValidate autoComplete="off" onSubmit={doLogin1}>
            <div className="form-label"><label>Grop Leader Email</label></div>
            <div>
              <TextField
                className="input-width"
                onChange={handleChange}
                name="email"
                placeholder="user@gmail.com"
                size="small"
                variant="outlined"
                required
              />
            </div>
            <br></br>
            <div className="form-label"><label>Grop ID</label></div>
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
            <Button role="submit" type="submit" className="text-center" onClick={doLogin1} disabled={btnDisabled} class="btn btn-dark" >
              {login1 ? 'Submit' : ''}
            </Button>
          </form>
          <p className="text-center" onClick={()=> setLogin1(!login1)}><span className="toggle-form">{login1 ? 'Add Submission Details' : 'Are You Submitted  already? Click here'}</span></p>
      </CardContent>
    </Card>
    </div>
  );
}

export default withRouter(Login1);
