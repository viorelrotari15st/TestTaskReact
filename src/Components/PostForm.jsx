import React from 'react';
import { useState } from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';
import UnicornService from '../API/UnicornService';


const PostForm = ({ create }) => {

    const [post, setPost] = useState({ name: '', age: '', colour: '' })

    const addNewPost = async (e) => {
        e.preventDefault();
        const newCorns = await UnicornService.newPost(post)
        create(newCorns);
        setPost({ name: '', age: '', colour: '' })


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
                    onClick={addNewPost}
                >Create post</MyButton>
            </form>

        </div>
    );
};

export default PostForm;