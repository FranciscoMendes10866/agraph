import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { SignUp, SignIn } from './Pages'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route path="/login" component={SignIn} />
      </Switch>
    </Router>
  );
}

export default App;
