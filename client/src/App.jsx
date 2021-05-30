import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'jotai'
import { QueryClient, QueryClientProvider } from 'react-query'

import Layout from './layout'
import { SignUp, SignIn, Dashboard, Recipe, CreateRecipe } from './pages'

const App = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <Router>
          <Switch>
            <Layout>
              <Route exact path="/register" component={SignUp} />
              <Route exact path="/login" component={SignIn} />
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/recipe" component={Recipe} />
              <Route exact path="/create-recipe" component={CreateRecipe} />
            </Layout>
          </Switch>
        </Router>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
