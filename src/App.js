import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostForm from './Components/PostForm';
import PostList from './Components/PostList';
import { unicornsGet, deteUnicorn } from './Redux/thunks'
import './styles/App.css'
import MyButton from './UI/button/MyButton';
import MyModal from './Components/MyModal/MyModal'
import PutForm from './Components/PutForm';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { getError, getPosts, isLoading } from './Redux/postsReducer'

function App() {
  const [modal, setModal] = useState(false);
  const [putmodal, setPutModal] = useState(false)
  const [curentItem, setCurecntItem] = useState()

  const posts = useSelector(getPosts);
  const loading = useSelector(isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(unicornsGet())
  }, [dispatch])

  const removePost = (post) => {
    dispatch(deteUnicorn(post._id));
  }
  const updatePost = (post) => {
    setCurecntItem(post);
    setPutModal(true);
  }
  const error = useSelector(getError);

  return (
    <div className="App">

      {error !== null
        ? <h1 className="warning">{error}</h1>
        : <h1 className="headertext">List of all unicorns from server</h1>
      }
      <MyButton onClick={() => setModal(true)} >Create Unicorn</MyButton>

      {!loading
        ? <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
        />
        : <PostList
          list={posts}
          remove={removePost}
          updade={updatePost}
          title="List of posts"
        />

      }

      {putmodal && (<MyModal visible
        setVisible={setPutModal}>
        {error !== null
          ? < h1 className='warning'> {error}</h1>
          : <h1 className="helements">Update Unicorn</h1>}
        <PutForm value={curentItem} />
      </MyModal>)
      }
      <MyModal visible={modal}
        setVisible={setModal}>
        {error !== null
          ? < h1 className='warning'> {error}</h1>
          : <h1 className="helements">Create Unicorn</h1>}
        < PostForm />
      </MyModal>
    </div >
  );
}

export default App;
