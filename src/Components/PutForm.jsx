import React from 'react';
import { useState } from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';
import UnicornService from '../API/UnicornService';


const PutForm = ({ value, onUpdate, remUpdateData }) => {

    const [updatePost, setUpdatedPost] = useState({ name: value.name, age: value.age, colour: value.colour })

    const updatePostFrom = async (e) => {
        e.preventDefault();
        const updateCorn = await UnicornService.updatePost(value._id, updatePost)
        onUpdate(updateCorn);
        remUpdateData({ ...updatePost, _id: value._id }, value._id)
        setUpdatedPost({ name: '', age: '', colour: '' })
    }

    return (
        <div>
            <form>

                <MyInput
                    value={updatePost.name}
                    type="text"
                    placeholder="Name of unicorn"
                    onChange={e => setUpdatedPost({ ...updatePost, name: e.target.value })}
                />

                <MyInput
                    value={updatePost.age}
                    type="text"
                    placeholder="Age of Unicorn"
                    onChange={e => setUpdatedPost({ ...updatePost, age: e.target.value })}
                />
                <MyInput
                    value={updatePost.colour}
                    type="text"
                    placeholder="Color of Unicorn"
                    onChange={e => setUpdatedPost({ ...updatePost, colour: e.target.value })}
                />

                <MyButton
                    onClick={updatePostFrom}
                >Update Post</MyButton>
            </form>

        </div>
    );
};

export default PutForm;