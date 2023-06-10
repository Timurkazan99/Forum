import React from 'react';
import {connect} from "react-redux";
import PostItem from "./PostItem.jsx";
import WithLoader from "../hocs/WithLoader.jsx";

const mapStateToProps = ({posts}) => ({ status: posts.status, items: posts.items });

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

export default connect(mapStateToProps, null)(WithLoader(PostsList));