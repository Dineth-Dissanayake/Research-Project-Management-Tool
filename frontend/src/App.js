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
          </Switch>
        </Layout>
      </AuthContextProvider>
    </ToastContextProvider>
  );
};


export default App;