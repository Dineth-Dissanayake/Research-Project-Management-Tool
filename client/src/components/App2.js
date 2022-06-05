import React, { Suspense, lazy }  from 'react';
import { Route } from 'react-router-dom';

const Login2 = lazy(() => import('./Login2'));
const Dashboard2 = lazy(() => import('./Dashboard2'));

function App2() {
  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
          <Route path="/supervisor" exact component={Login2} />
          <Route path="/dashboard2" component={Dashboard2} />
      </Suspense>
    </>
  );
}

export default App2;
