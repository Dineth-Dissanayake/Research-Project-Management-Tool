import React, { Suspense, lazy }  from 'react';
import { Route } from 'react-router-dom';

const Login3 = lazy(() => import('./Login3'));
const Dashboard3 = lazy(() => import('./Dashboard3'));

function App3() {
  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
          <Route path="/cosupervisor" exact component={Login3} />
          <Route path="/dashboard3" component={Dashboard3} />
      </Suspense>
    </>
  );
}

export default App2;
