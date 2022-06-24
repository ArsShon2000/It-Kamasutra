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


let Navbars = [
  {navs: 'Dialogs', paths: '/dialogs'},
  {navs: 'Profile', paths: '/profile'},
  {navs: 'News', paths: '/news'},
  {navs: 'Music', paths: '/music'},
  {navs: 'Settings', paths: '/settings'},
]

let navbarElements = Navbars.map ( n => <Route  path={<n.paths />} render={ () => <n.navs />} />  )

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <Navbar />
        <div className='App-wrapper-content'>
          {/* <Route  path='/dialogs' component={Dialogs} />     потому что компонент не дает вывести БД за АПП ЖС
          <Route  path='/profile' component={Profile} /> 
          <Route  path='/news' component={News} />                или рендер быстрее
          <Route  path='/music' component={Music} />
          <Route  path='/settings' component={Settings} /> */}
          
          { navbarElements }


          {/* <Route  path='/dialogs' render={ () => <Dialogs />} />
          <Route  path='/profile' render={ () => <Profile />} />
          <Route  path='/news' render={ () => <News />} />
          <Route  path='/music' render={ () => <Music />} />
          <Route  path='/settings' render={ () => <Settings />} />
         */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;