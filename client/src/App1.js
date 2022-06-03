import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PitchURLContextProvider from './contexts/PitchURLContext';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';
import PrivateRoute from './components/PrivateRoute';
import DisplayTool from './components/DisplayTool';
import LandingPage from './components/LandingPage';
import AuthProvider from './contexts/AuthContext';
import Dashboard from './components/Dashboard';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Signup from './components/Singup';
import Login from './components/Login';

function App1() {
  return (
    <Router>
      <div>
        <AuthProvider>
          <PitchURLContextProvider>
          <Navbar />
            <Switch>
              <Route exact path='/new'>
                <LandingPage />
              </Route>
              <Route exact path="/presentation">
                <DisplayTool />
              </Route>
              <Container className='d-flex align-items-center justify-content-center' style={{minHeight: '90vh'}}>
                <div className='w-100' style={{maxWidth: '400px'}}>


                  <PrivateRoute path='/dashboard' component={Dashboard} />
                  <PrivateRoute path='/update-profile' component={UpdateProfile} />
                  <Route path='/signup' component={Signup} />
                  <Route path='/login' component={Login} />
                  <Route path='/forgot-password' component={ForgotPassword} />
                </div>
              </Container>
            </Switch>
          </PitchURLContextProvider>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App1;
