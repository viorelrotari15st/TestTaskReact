import React, { useEffect, useState } from 'react';
import PostForm from './Components/PostForm';
import PostList from './Components/PostList';
import './styles/App.css'
import UnicornService from './API/UnicornService'
import MyModal from './Components/MyModal/MyModal';
import MyButton from './UI/button/MyButton';

function App() {
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false);

  }

  useEffect(() => {
    fetchUnicorns()
  }, [])

  //primeste ca argument un post 

  const removePost = (post) => {
    setPosts(posts.filter(p => p._id !== post._id));
  }
  async function fetchUnicorns() {
    const unicorns = await UnicornService.getAll();
    setPosts(unicorns);
  }
  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)} >Create Unicorn</MyButton>
      <MyModal visible={modal}
        setVisible={setModal}>
        <h1 style={{ textAlign: 'center' }}>Create Unicorn</h1>
        <PostForm create={createPost} />
      </MyModal>
      {posts.length !== 0
        ? <PostList remove={removePost} updatePostItem={updateData} posts={posts} title="List of posts" />
        : <h1 style={{ textAlign: 'center' }}>Posts don't find</h1>
      }


    </div>
  );
}

export default App;
