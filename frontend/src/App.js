import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//import Home from './components/pages/Home';
import Admin from './components/pages/Admin';
import PanelMember from './components/pages/PanelMember';
import PanelAlocation from './components/pages/PanelAlocation';
import AddPanel from './components/pages/AddPanel';
import EditPanel from './components/pages/EditPanel';

function App() {
  return (
    <Router>
      
      <div className="App">
          <Admin/>
          <Route path="/panel-member" exact component={PanelMember} />
          <Route path="/panel-management" exact component={PanelAlocation} />
          <Route path="/add" exact component={AddPanel} />
          <Route path="/edit/:id" exact component={EditPanel} />
      </div>

    </Router>
  );
}

export default App;