import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostForm from './Components/PostForm';
import PostList from './Components/PostList';
import { unicornsGet, deteUnicorn } from './Redux/actions'
import './styles/App.css'
import MyButton from './UI/button/MyButton';
import MyModal from './Components/MyModal/MyModal'
import PutForm from './Components/PutForm';

function App() {
  const [modal, setModal] = useState(false);
  const [putmodal, setPutModal] = useState(false)
  const [curentItem, setCurecntItem] = useState()

  const dispatchDataFromeServer = useDispatch()

  useEffect(() => {
    dispatchDataFromeServer(unicornsGet())

  }, [])

  const dispachForDeletePost = useDispatch()
  const removePost = (post) => {
    dispachForDeletePost(deteUnicorn(post._id));
  }
  const updatePost = (post) => {
    setCurecntItem(post);
    setPutModal(true);
  }

  const state = useSelector(state => state.posts)
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginTop: 10, color: 'green' }}>List of all unicorns from server</h1>
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)} >Create Unicorn</MyButton>

      {putmodal && (<MyModal visible
        setVisible={setPutModal}>
        <h1 style={{ textAlign: 'center' }}>Update Unicorn</h1>
        <PutForm value={curentItem} />
      </MyModal>)
      }
      <MyModal visible={modal}
        setVisible={setModal}>
        <h1 style={{ textAlign: 'center' }}>Create Unicorn</h1>
        <PostForm />
      </MyModal>

      {state.length !== 0
        ? <PostList remove={removePost} updade={updatePost}
          title="List of posts" />
        : <h1 style={{ textAlign: 'center' }}>Posts dont find</h1>
      }
    </div>
  );
}

export default App;
