
import React from 'react';
import PostItem from './PostItem';
//noi props este obiect prin distructirizare extragem posts

const PostList = ({ list, remove, updade }) => {
    return (
        <div>
            {list.map((post, index) =>
                <PostItem remove={remove} updade={updade}
                    number={index + 1} post={post} key={post._id} />
            )}
        </div>
    );
};
export default PostList;