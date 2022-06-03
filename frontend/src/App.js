import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//import Home from './components/pages/Home';
//import Admin from './components/pages/Admin';
// import PanelMember from './components/pages/PanelMember';
// import PanelAlocation from './components/pages/PanelAlocation';
// import AddPanel from './components/pages/AddPanel';
// import EditPanel from './components/pages/EditPanel';

// import MarkingAlocation from './components/pages/MarkingAlocation';
// import AddMarking from './components/pages/AddMarking';
// import EditMarking from './components/pages/EditMarking';
// import ViewMarkDetails from './components/pages/ViewMarkDetails';

import PanelNav from './components/PanelMember/PanelNav';
import PanelHome from './components/PanelMember/PanelHome';
import ViewPanelMarkDetails from './components/PanelMember/ViewPanelMarkDetails';
import AddMarking from './components/PanelMember/AddMarking';

function App() {
  return (
    <Router>
      
      <div className="App">
          <PanelNav />
          <Route path="/" exact component={PanelHome} />
          <Route path="/marks-view/:id" exact component={ViewPanelMarkDetails} />
          <Route path="/marking-add/edit/:id" exact component={AddMarking} />
      </div>

    </Router>
  );
}

export default App;