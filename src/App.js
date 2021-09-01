import React, { useEffect, useState } from 'react';
import PostForm from './Components/PostForm';
import PostList from './Components/PostList';
import './styles/App.css'
import UnicornService from './API/UnicornService'
import MyModal from './Components/MyModal/MyModal';
import MyButton from './UI/button/MyButton';
import PutForm from './Components/PutForm';

function App() {
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const [putmodal, setPutModal] = useState(false)
  const [curentItem, setCurecntItem] = useState()

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false);
  }

  useEffect(() => {
    fetchUnicorns()
  }, [])

  const remUpdateData = (data, id) => {
    const index = posts.findIndex((e) => e._id === id);
    const newArr = [...posts];
    newArr[index] = data;
    setPosts(newArr);
    setPutModal(false);
  }


  const removePost = async (post) => {
    await UnicornService.deletaPost(post._id)
      .then(() => setPosts(posts.filter(p => p._id !== post._id)));
  }
  const fetchUnicorns = async () => {
    const unicorns = await UnicornService.getAll();
    setPosts(unicorns);
  }

  const updateData = (post) => {
    setCurecntItem(post);
    setPutModal(true);
  }
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginTop: 10, color: 'green' }}>List of all unicorns from server</h1>
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)} >Create Unicorn</MyButton>

      {
        putmodal && (<MyModal visible
          setVisible={setPutModal}>
          <h1 style={{ textAlign: 'center' }}>Update Unicorn</h1>
          <PutForm value={curentItem} remUpdateData={remUpdateData} />
        </MyModal>)
      }

      <MyModal visible={modal}
        setVisible={setModal}>
        <h1 style={{ textAlign: 'center' }}>Create Unicorn</h1>
        <PostForm create={createPost} />
      </MyModal>
      {posts.length !== 0
        ? <PostList remove={removePost} updade={updateData} posts={posts} title="List of posts" />
        : <h1 style={{ textAlign: 'center' }}>Posts don't find</h1>
      }


    </div>
  );
}

export default App;
