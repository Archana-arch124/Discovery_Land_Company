
import Loader from './components/Loader/loader.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react';
import About from './pages/about.jsx';
import Gallery from './pages/gallery.jsx';
import News from './pages/news.jsx';
import ToolBarContact from './pages/contact.jsx';
import Experience from './pages/experiences'
import OurWorlds from './pages/ourWorlds.jsx';
import Home from './components/Home/home.jsx';

function App () {
  return (
      <Router>
        <Switch>
         <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/ourWorlds" exact component={OurWorlds} />
          <Route path="/experiences" exact component={Experience} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/news"  exact component={News} />
          <Route path="/contact" exact component={ToolBarContact} />
       </Switch>
      </Router>

  );
}

export default App;

