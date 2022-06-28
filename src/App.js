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
import store from './redux/state';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <Navbar state={props.state.sidebar} />
        <div className='App-wrapper-content'>
          <Route path='/dialogs'
            render={() => <Dialogs
              store={props.store}
            />} />
          <Route path='/profile'
            render={() => <Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch}
            />} />
          <Route path='/news'
            render={() => <News />} />
          <Route path='/music'
            render={() => <Music />} />
          <Route path='/settings'
            render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;