import {ProviderPosts} from './Api-context/index.js'
import './App.scss';
import {  Route, BrowserRouter as Router, Switch  } from 'react-router-dom';
import Home from './conmponents/Home/index.js';
import Comments from './conmponents/Comments/index.js';
import Header from './conmponents/Header/index.js';

function App() {
  return (     
    <Router>      
      <ProviderPosts>
        <Header/>
      <Switch>        
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/c" exact >
          <Comments />
        </Route>
      </Switch>
      </ProviderPosts>    
  </Router>
      
      
           
    
  );
}

export default App;
