import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import PanelNav from './components/PanelMember/PanelNav';
import PanelHome from './components/PanelMember/PanelHome';
import ViewPanelMarkDetails from './components/PanelMember/ViewPanelMarkDetails';
import AddMarking from './components/PanelMember/AddMarking';
import StudentsRequestList from './components/pages/StudentsRequestList';
import StudentRequestView from './components/pages/StudentRequestView';
import StudentRequestAdd from './components/pages/StudentRequestAdd';
import TopicsList from './components/pages/TopicsList';
import TopicsEdit from './components/pages/TopicsEdit';
import TopicsView from './components/pages/TopicsView';
import TopicsAdd from './components/pages/TopicsAdd';
import StudentRequestListAll from './components/pages/StudentRequestListAll';
import StudentRequestEdit from './components/pages/StudentRequestEdit';
import TopicsListAll from './components/pages/TopicsListAll';
import StdReqView from './components/pages/StdReqView';
import TopReqView from './components/pages/TopReqView';

function App() {
  return (
    <Router>
      
      <div className="App">
          <PanelNav />
          <Route path="/" exact component={PanelHome} />
          <Route path="/marks-view/:id" exact component={ViewPanelMarkDetails} />
          <Route path="/marking-add/edit/:id" exact component={AddMarking} />
          <Route path="/request-list" exact component={StudentsRequestList} />
          <Route path="/request/edit/:id" exact component={StudentRequestView} />
          <Route path="/topics-list" exact component={TopicsList} />
          <Route path="/topics-list/edit/:id" exact component={TopicsView} />

          {/* students */}
          <Route path="/topic/add" exact component={TopicsAdd}/>
          <Route path="/topics/edit/:id" exact component={TopicsEdit} />
          <Route path="/topic/all" exact component={TopicsListAll}/>
          <Route path="/topic/show/:id" exact component={TopReqView}/>

          <Route path="/add" exact component={StudentRequestAdd} />
          <Route path="/request/show" exact component={StudentRequestListAll}/>
          <Route path="/request/show/edit/:id" exact component={StudentRequestEdit}/>
          <Route path="/request/show/:id" exact component={StdReqView}/>

      </div>

    </Router>
  );
}

export default App;