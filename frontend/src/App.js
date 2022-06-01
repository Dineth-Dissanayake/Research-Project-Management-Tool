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
            <Route path="/topics-list" element={<TopicsList/> } />
          </Switch>
        </Layout>
      </AuthContextProvider>
    </ToastContextProvider>
  );
};


export default App;