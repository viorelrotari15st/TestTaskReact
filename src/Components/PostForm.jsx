import React from 'react';
import { useState } from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';
import UnicornService from '../API/UnicornService';


const PostForm = ({ create }) => {
    // primim datele dintru-un input controlabil
    //const [title, setTitle] = useState('');
    // primim datele din  input necontrolabil 
    // prin acest hook putem primi datele din doom element 
    //const bodyInputRef = useRef();
    //const [body, setBody] = useState('');

    //optimizare!!!
    //realizam o satare noua care primeste un obiect 
    const [post, setPost] = useState({ name: '', age: '', colour: '' })
    
    // async function fetchNewUnicor(e) {
    //     e.preventDefault()
    //     const newCorns = await UnicornService.newPost(post)
    //     console.log(newCorns)
        
    //   }

    const  addNewPost = async (e) => {
        e.preventDefault()
        //primesc datele din imput si le setez in obiect 
         
        //facem o copie a vechiului array prin...posts 
        //apoi adaugam un nou element 
        //setPosts([...posts, { ...post, id: Date.now() }]);
        //dupa apasarea butonului curatim inputul
        const newCorns = await UnicornService.newPost(post)

        // const newPost = {
        //     ...post, _id: Date.now()
        // }
        //functie de inversa chemare useCalback pentru 
        //pentru a apela parinte
        create(newCorns)
        setPost({ name: '', age: '', colour: '' })


    }

    return (
        <div>
            <form>
                <MyInput
                    value={post.title}
                    type="text"
                    placeholder="Name of unicorn"
                    onChange={e => setPost({ ...post, name: e.target.value })}
                />

                <MyInput
                    value={post.body}
                    type="text"
                    placeholder="Age of Unicorn"
                    onChange={e => setPost({ ...post, age: e.target.value })}
                />
                <MyInput
                    value={post.title}
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