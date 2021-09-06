
import React from 'react';
import PostItem from './PostItem';
import { useSelector } from 'react-redux';
//noi props este obiect prin distructirizare extragem posts

const PostList = ({ remove, updade }) => {
    const state = useSelector(state => state.posts);
    console.log(state)
    return (
        <div>
            {state.posts.map((post, index) =>
                <PostItem remove={remove} updade={updade}
                    number={index + 1} post={post} key={post._id} />
            )}

        </div>
    );
};
export default PostList;