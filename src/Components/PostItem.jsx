import React from "react";
import MyButton from "../UI/button/MyButton";

const PostItem = ({ number, post, remove, updade }) => {
  return (
    <div>
      <div className="post">
        <div className="post_content">
          <strong>
            {number}.{post.name}{" "}
          </strong>
          <div>Age: {post.age}</div>
          <div>Color: {post.colour}</div>
        </div>
        <div className="postBtn">
          <MyButton onClick={() => remove(post)}>Delete</MyButton>
          <MyButton onClick={() => updade(post)}>Update</MyButton>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
