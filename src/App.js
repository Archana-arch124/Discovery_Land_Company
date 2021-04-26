
import Loader from './components/Loader/loader.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react';
import About from './pages/about.jsx';
import Gallery from './pages/gallery.jsx';
import News from './pages/news.jsx';
import ToolBarContact from './pages/contact.jsx';
import Experience from './pages/experiences'
import OurWorlds from './pages/ourWorlds.jsx';

function App () {
  return (
      <Router>
        <Switch>
          <Route path="/about"  component={About} />
          <Route path="/ourWorlds"  component={OurWorlds} />
          <Route path="/experiences"  component={Experience} />
          <Route path="/gallery"  component={Gallery} />
          <Route path="/news"  component={News} />
          <Route path="/contact"  component={ToolBarContact} />
       </Switch>
       <Loader/>
      </Router>

  );
}

export default App;

