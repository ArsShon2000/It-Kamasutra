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


const App = (props) => {


  //   let posts =[
  //     {id: 1, message: 'Hi, my name is Ars', likesCount: 7},
  //     {id: 2, message: "It's my first post", likesCount: 6},                     Подняли на уровень выше чтобы  отправить их в БД
  //     {id: 1, message: 'I learn React 3-th day', likesCount: 47},
  //     {id: 1, message: 'Я будущий миллионер', likesCount: 87237},
  // ]
  //___________________________________________________________________________________________________________________

  // let dialogs = [
  //   { id: 1, name: 'Malyshka' },
  //   { id: 2, name: 'Senpai' },
  //   { id: 3, name: 'Artur' },                    Подняли на уровень выше чтобы  отправить их в БД
  //   { id: 4, name: 'Amina' },
  //   { id: 5, name: 'Sabira' },
  //   { id: 6, name: 'Den' },
  // ]




  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <Navbar state={props.state.sidebar} />
        <div className='App-wrapper-content'>
          {/* <Route  path='/dialogs' component={Dialogs} />     потому что компонент не дает вывести БД за АПП ЖС
          <Route  path='/profile' component={Profile} /> 
          <Route  path='/news' component={News} />                или рендер быстрее
          <Route  path='/music' component={Music} />
          <Route  path='/settings' component={Settings} /> */}

          <Route path='/dialogs'
            render={() => <Dialogs
              state={props.state.dialogsPage} />} />
          <Route path='/profile'
            render={() => <Profile
              profilePage={props.state.profilePage}
              addPost={props.addPost}
              updateNewPostText={props.updateNewPostText}
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