// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Login from './Login';
import InsuranceInfo from './InsuranceInfo';
import Test from './Test'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/insurance-info" component={InsuranceInfo} />
        <Route path="/test" component={Test} />
        <Route path="/datos" component={InsuranceInfo} />
        {/* aqui poner el componente final que es el ultimocomponente */}
        <Route path="/datos" component={InsuranceInfo} />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
};

export default App;
