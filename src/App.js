import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
 import Library from './components/Library';
 import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header>
            <nav className="links">
            <h1 className="bloclogo"> Bloc JAMS </h1>
             <Link className="homelink" to='/'> Home </Link>
             <Link className="librarylink" to='/library'>Library</Link>
             
             
           </nav>
          
         </header>
       <main>
          <Route exact path="/" component={Landing} />
           <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
       </main>
      </div>
    );
  }
}

export default App;
