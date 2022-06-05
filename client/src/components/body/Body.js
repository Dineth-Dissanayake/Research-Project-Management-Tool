import React,{ Suspense } from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
import ActivationEmail from './auth/ActivationEmail'
import NotFound from '../utils/NotFound/NotFound'
import ForgotPass from './auth/ForgotPassword'
import ResetPass from './auth/ResetPassword'
import Profile from './profile/Profile'
import EditUser from './profile/EditUser'
import Home from '../../components/body/home/Home'
import {useSelector} from 'react-redux'
import Navbar from '../Navbar'
import AuthProvider from '../../contexts/AuthContext'
import DisplayTool from '../DisplayTool'
import PitchURLContextProvider from '../../contexts/PitchURLContext'
import LandingPage from '../LandingPage'
import Login1 from '../Login'
import Dashboard from '../Dashboard'
import { Container } from 'react-bootstrap'
import Admin from './home/Admin'
import Login2 from'../Login2'
import Dashboard2 from '../Dashboard2'
import Login3 from'../Login3'
import Dashboard3 from '../Dashboard3'
import Login4 from'../Login4'
import Dashboard4 from '../Dashboard4'
import Login5 from'../Login5'
import Dashboard5 from '../Dashboard5'
import PMT from '../../components/body/home/PMT'
import 'bootstrap/dist/css/bootstrap.min.css';

//import Home from './components/pages/Home';

import MarkingAlocation from '../pages/MarkingAlocation'
import PanelMember from '../pages/PanelMember'
import PanelAlocation from '../pages/PanelAlocation'
import AddPanel from '../pages/AddPanel'
import EditPanel from '../pages/EditPanel'
import AddMarking from '../pages/AddMarking'
import EditMarking from '../pages/EditMarking'
import ViewMarkDetails from '../pages/ViewMarkDetails'



function Body() {
    const auth = useSelector(state => state.auth)
    const {isLogged, isAdmin} = auth
    
    return (
        <section>
            <Switch>
                <Route path="/login" component={isLogged ? NotFound : Login} exact />
                <Route path="/register" component={isLogged ? NotFound : Register} exact />
                <Route path="/adminpanel" exact component={Admin}/>
                <Route path="/chm" exact component={Home}/>
                <Route path="/homi" exact component={PMT}/>
                <Route path="/forgot_password" component={isLogged ? NotFound : ForgotPass} exact />
                <Route path="/user/reset/:token" component={isLogged ? NotFound : ResetPass} exact />
                <Route path="/user/activate/:activation_token" component={ActivationEmail} exact />
                <Route path="/profile" component={isLogged ? Profile : NotFound} exact />
                <Route path="/edit_user/:id" component={isAdmin ? EditUser : NotFound} exact />
         

          <Route path="/panel-member" exact component={PanelMember} />
          <Route path="/panel-management" exact component={PanelAlocation} />
          <Route path="/add" exact component={AddPanel} />
          <Route path="/edit/:id" exact component={EditPanel} />

          <Route path="/marking-management" exact component={MarkingAlocation} />
          <Route path="/marking/add" exact component={AddMarking} />
          <Route path="/marking/edit/:id" exact component={EditMarking} />
          <Route path="/marking/view/:id" exact component={ViewMarkDetails} />

















  </Switch>

  <>
      <Suspense fallback={<h3>Loading...</h3>}>
          <Route path="/my" exact component={Login1} />
          <Route path="/dashboard" component={Dashboard} />
        
        
         <Route path="/supervisor" exact component={Login2} />
         <Route path="/dashboard2" component={Dashboard2} />

        <Route path="/admin" component={Login3} />
        <Route path="/dashboard3" component={Dashboard3} />

          <Route path="/panel" component={Login4} />
          <Route path="/dashboard4" exact component={Dashboard4} />

          
          <Route path="/student" exact component={Login5} />
          <Route path="/dashboard5" component={Dashboard5} />   
          

         
      </Suspense>
    </>
<AuthProvider>
          <PitchURLContextProvider>
          <Navbar />
            <Switch>
              <Route  path='/new'>
 <LandingPage />
              </Route>
              <Route  path="/presentation">
                <DisplayTool />
              </Route>
              <Container className='d-flex align-items-center justify-content-center' style={{minHeight: '90vh'}}>
           
                
      
               
              </Container>
            </Switch>
          </PitchURLContextProvider>
        </AuthProvider>
</section>
    )
}

export default Body
