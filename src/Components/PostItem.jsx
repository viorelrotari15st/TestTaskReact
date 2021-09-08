import React from "react";
import MyButton from "../UI/button/MyButton";

const PostItem = (props) => {
  return (
    <div>
      <div className="post">
        <div className="post_content">
          <strong>
            {props.number}.{props.post.name}{" "}
          </strong>
          <div>Age: {props.post.age}</div>
          <div>Color: {props.post.colour}</div>
        </div>
        <div className="postBtn">
          <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
          <MyButton onClick={() => props.updade(props.post)}>Update</MyButton>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
