import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'jotai'
import { QueryClient, QueryClientProvider } from 'react-query'

import { SignUp, SignIn, Dashboard, Recipe } from './pages'
import { NavBar } from './components'

const App = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/register" component={SignUp} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/recipe" component={Recipe} />
          </Switch>
        </Router>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
