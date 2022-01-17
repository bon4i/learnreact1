import React, {useState}from 'react';
import Counter from './Components/Counter';
import Postitem from './Components/Postitem';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'PHP', body: 'Description'},
    {id: 3, title: 'Python', body: 'Description'},
    {id: 4, title: 'C#', body: 'Description'},
  ])
  return (
    <div>
         {posts.map(post =>
          <Postitem post={post} key={post.id}/>
          )}
          <Counter/>
    </div>
  );
}

export default App;
