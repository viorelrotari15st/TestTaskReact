import React from 'react';
import { useState } from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';
import { useDispatch } from 'react-redux';
import { createNewPost } from '../Redux/thunks';
;

const PostForm = () => {
    const dispachForPost = useDispatch();
    const [post, setPost] = useState({ name: '', age: '', colour: '' });
    const addNewPost = (e) => {
        dispachForPost(createNewPost(post));
        setPost({ name: '', age: '', colour: '' });
    }

    return (
        <div>
            <form>
                <MyInput
                    value={post.name}
                    type="text"
                    placeholder="Name of unicorn"
                    onChange={e => setPost({ ...post, name: e.target.value })}
                />

                <MyInput
                    value={post.age}
                    type="text"
                    placeholder="Age of Unicorn"
                    onChange={e => setPost({ ...post, age: e.target.value })}
                />
                <MyInput
                    value={post.colour}
                    type="text"
                    placeholder="Color of Unicorn"
                    onChange={e => setPost({ ...post, colour: e.target.value })}
                />

                <MyButton
                    type="button"
                    onClick={addNewPost}
                >Create post</MyButton>
            </form>

        </div>
    );
};


export default PostForm;