import React from 'react';
import { useState } from 'react';
import MyButton from '../../UI/button/MyButton';
import MyInput from '../../UI/input/MyInput';
import { useDispatch } from 'react-redux';
import { updateDataUnicorn } from '../../Redux/thunks'

const PutForm = ({ value, }) => {
    const dispachPutDataForServer = useDispatch();
    const [updatePost, setUpdatedPost] = useState({ name: value.name, age: value.age, colour: value.colour })
    const updatePostFrom = (e) => {
        e.preventDefault();
        dispachPutDataForServer(updateDataUnicorn(updatePost, value._id))
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