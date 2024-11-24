import React, { useState, useEffect } from 'react';
import PostsList from './components/PostsList';
import ErrorMessage from './Components/ErrorMessage';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch posts');
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      {error ? <ErrorMessage message={error} /> : <PostsList posts={posts} />}
    </div>
  );
};

export default App;
