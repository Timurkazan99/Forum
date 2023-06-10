import React from 'react';
import {connect} from "react-redux";
import CommentItem from "./CommentItem.jsx";
import WithLoader from "../hocs/WithLoader.jsx";

const mapStateToProps = ({comments}, {id}) => ({ status: comments.status, items: comments[id]});

const CommentsList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (<CommentItem {...item}/>))}
    </ul>
  );
};

CommentsList.defaultProps = {
  loader: 'spinner'
}

export default connect(mapStateToProps, null)(WithLoader(CommentsList));