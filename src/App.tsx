import React from 'react';
import UserList from './components/UserList';
import CommentsList from './components/CommentsList';


function App() {
  return (
    <div>
      <p>PROJECT STARTED</p>
      <UserList />
      <hr/>
      <CommentsList />
    </div>
  );
}

export default App;
