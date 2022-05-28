import { Routes as Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { AuthContextProvider } from "./context/AuthContext";
import { ToastContextProvider } from "./context/ToastContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RegisterTopic from "./pages/RegisterTopic";
import AllRegisterTopic from "./pages/AllRegisterTopic";
import EditRegisterTopic from "./pages/EditRegisterTopic";
import AddGroup from "./pages/AddGroup";
import AllAddGroup from "./pages/AllAddgroup";
import EditAddgroup from "./pages/EditAddgroup";
const App = () => {
  return (
    <ToastContextProvider>
      <AuthContextProvider>
        <Layout>
          <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/registertopic" element={<RegisterTopic />} />
            <Route path="/myregistertopics" element={<AllRegisterTopic />} />
            <Route path="/edit/:id" element={<EditRegisterTopic />} />
            <Route path="/addgroup" element={<AddGroup />} />
            <Route path="/alladdgroup" element={<AllAddGroup />} />
            <Route path="/editaddgroup/:id" element={<EditAddgroup />} />

          </Switch>
        </Layout>
      </AuthContextProvider>
    </ToastContextProvider>
  );
};

export default App;
