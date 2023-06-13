import React from 'react';
import PostItem from "./PostItem.jsx";

const PostsList = ({ items }) => {
  return (
    <div>
      {items && items.map(({id, title, body}) => (
        <PostItem
          key={id}
          id={id}
          title={title}
          body={body}
        />
      ))}
    </div>
  );
};

export default PostsList;