import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'jotai'

import { SignUp, SignIn, Dashboard } from './pages'

const App = () => {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route path="/login" component={SignIn} />
          <Route path="/dash" component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
