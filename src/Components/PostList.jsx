import React from 'react';
import PostItem from './PostItem';
//noi props este obiect prin distructirizare extragem posts
const PostList = ({ posts, name, remove, updade }) => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{name}</h1>
            {posts.map((post, index) =>
                <PostItem remove={remove} updade={updade}
                    number={index + 1} post={post} key={post._id} />
            )}

        </div>
    );
};

export default PostList;