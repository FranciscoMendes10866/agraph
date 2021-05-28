import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'jotai'

import { SignUp, SignIn } from './Pages'

const App = () => {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route path="/login" component={SignIn} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
