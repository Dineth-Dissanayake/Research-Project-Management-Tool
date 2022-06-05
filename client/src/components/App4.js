import React, { Suspense, lazy }  from 'react';
import { Route } from 'react-router-dom';

const Login4 = lazy(() => import('./Login4'));
const Dashboard4 = lazy(() => import('./Dashboard4'));

function App4() {
  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
          <Route path="/panel" exact component={Login4} />
          <Route path="/dashboard4" component={Dashboard4} />
      </Suspense>
    </>
  );
}

export default App2;
