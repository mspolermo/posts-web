import React from 'react';
import UserList from './components/UserList';
import PostsList from './components/PostsList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import './styles/App.scss'
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div>
      <Header />
      <main className='container'>
        <PostsList />
        <Menu />  
      </main>
    </div>
  );
}

export default App;
