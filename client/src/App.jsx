import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'jotai'
import { QueryClient, QueryClientProvider } from 'react-query'

import { SignUp, SignIn, Dashboard } from './pages'

const App = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <Router>
          <Switch>
            <Route exact path="/register" component={SignUp} />
            <Route path="/login" component={SignIn} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </Router>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
