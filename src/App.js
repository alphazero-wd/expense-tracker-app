import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Movie from './components/Movie';
import Error from './components/Error';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movie/:id" component={Movie} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
