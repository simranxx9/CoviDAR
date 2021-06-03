import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Faqs from './components/Faqs';
import News from './components/News';
import CoviIndia from './components/CoviIndia';
import PageNotFound from './components/PageNotFound';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/faqs" exact component={Faqs} />
        <Route path="/news" exact component={News} />
        <Route path="/coviindia" exact component={CoviIndia} />
        <Route component={PageNotFound} />
      </Switch>

    </Router>
  );
}

export default App;
