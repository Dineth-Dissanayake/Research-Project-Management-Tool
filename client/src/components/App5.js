import React, { Suspense, lazy }  from 'react';
import { Route } from 'react-router-dom';

const Login5 = lazy(() => import('./Login5'));
const Dashboard5 = lazy(() => import('./Dashboard5'));

function App2() {
  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
          <Route path="/student" exact component={Login5} />
          <Route path="/dashboard5" component={Dashboard5} />
      </Suspense>
    </>
  );
}

export default App2;
