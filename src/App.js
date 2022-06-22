import React, { component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'


const App = () => {
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <Navbar />
        <div className='App-wrapper-content'>
          <Route /*exact*/ path='/dialogs' component={Dialogs} />
          <Route /*exact*/ path='/profile' component={Profile} />
          <Route /*exact*/ path='/news' component={News} />
          <Route /*exact*/ path='/music' component={Music} />
          <Route /*exact*/ path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;