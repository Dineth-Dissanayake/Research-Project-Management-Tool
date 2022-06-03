import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//import Home from './components/pages/Home';
import Admin from './components/pages/Admin';
import PanelMember from './components/pages/PanelMember';
import PanelAlocation from './components/pages/PanelAlocation';
import AddPanel from './components/pages/AddPanel';
import EditPanel from './components/pages/EditPanel';

import MarkingAlocation from './components/pages/MarkingAlocation';
import AddMarking from './components/pages/AddMarking';
import EditMarking from './components/pages/EditMarking';
import ViewMarkDetails from './components/pages/ViewMarkDetails';

function App() {
  return (
    <Router>
      
      <div className="App">
          <Admin/>
          <Route path="/panel-member" exact component={PanelMember} />
          <Route path="/panel-management" exact component={PanelAlocation} />
          <Route path="/add" exact component={AddPanel} />
          <Route path="/edit/:id" exact component={EditPanel} />

          <Route path="/marking-management" exact component={MarkingAlocation} />
          <Route path="/marking/add" exact component={AddMarking} />
          <Route path="/marking/edit/:id" exact component={EditMarking} />
          <Route path="/marking/view/:id" exact component={ViewMarkDetails} />
      </div>

    </Router>
  );
}

export default App;