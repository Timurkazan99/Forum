import React from 'react';

const CommentItem = (props) => {
  return (
    <div>
      <h6>{props.email}</h6>
      <p>{props.body}</p>
    </div>
  );
};

export default CommentItem;