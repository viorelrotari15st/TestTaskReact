import React from 'react';
import MyButton from '../UI/button/MyButton';

const PostItem = ({ number, post, onDelete, updatePost }) => {



    return (
        <div>
            <div className='post'>
                <div className="post_content">
                    <strong>{number}.{post.name} </strong>
                    <div>
                        Age: {post.age}
                    </div>
                    <div>
                        Color: {post.colour}
                    </div>
                </div>
                <div className="postBtn">
                    <MyButton
                        onClick={onDelete}
                    >Delete</MyButton>
                </div>
                <MyButton
                    onClick={updatePost}
                >Edit</MyButton>
            </div>

        </div>
    );
};

export default PostItem;