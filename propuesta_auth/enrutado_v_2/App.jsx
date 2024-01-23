// App.js

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import authService from './authService';
import authMiddleware from './authMiddleware';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Login from './Login';
import InsuranceInfo from './InsuranceInfo';
import Thanks from './Thanks';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/thanks" component={authMiddleware.authenticateToken(Thanks)} />
        <Route path="/insurance-info" component={authMiddleware.authenticateToken(InsuranceInfo)} />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
};

export default App;
