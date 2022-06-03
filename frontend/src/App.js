import {Routes as Switch, Route} from 'react-router-dom';

import Layout from "./components/Layout";
import { AuthContextProvider } from './context/AuthContext';
import { ToastContextProvider } from './context/ToastContext';
import Home from './pages/Home';
import SupervisorHome from './pages/supervisor/SupervisorHome';
import Login from './pages/Login';
import Register from './pages/Register';
import MarkingSchema from './pages/supervisor/MarkingSchema';
import TopicsList from './pages/supervisor/TopicsList';
import TopicView from './pages/supervisor/TopicView';
import TopicRequest from './pages/supervisor/TopicRequest';
import StudentRequestList from './pages/supervisor/StudentRequestList';
import StudentRequest from './pages/supervisor/StudentRequest';
import StudentRequestView from  './pages/supervisor/StudentRequestView';
import Edit from './pages/supervisor/Edit';

const App = () => {
  return (
    <ToastContextProvider>
      <AuthContextProvider>
        <Layout>
          <Switch>
            <Route path="/" element={<Home/>} />
            <Route path="/supervisor-home" element={<SupervisorHome/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/> } />
            <Route path="/marking-schema" element={<MarkingSchema/> } />
            <Route path="/topics-request" element={<TopicRequest/> } />
            <Route path="/topics-list" element={<TopicsList/> } />
            <Route path="/topics-view" element={<TopicView/> } />
            <Route path="/request-list" element={<StudentRequestList/> } />
            <Route path="/request" element={<StudentRequest/> } />
            <Route path="/request-list/edit/:id" element={<StudentRequestView/> } />
            {/* <Route path="/edit" exact component={Edit} /> */}
            <Route path="/edit/:id" element={<Edit/> } />

          </Switch>
        </Layout>
      </AuthContextProvider>
    </ToastContextProvider>
  );
};


export default App;