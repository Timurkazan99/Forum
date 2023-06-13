import React from 'react';
import {connect} from "react-redux";
import CommentItem from "./CommentItem.jsx";
import WithLoader from "../hocs/WithLoader.jsx";
import {CSSTransition} from "react-transition-group";
import WithErrors from "../hocs/WithErrors.jsx";

const mapStateToProps = ({comments, error}, {id}) => ({
  status: (id !== comments.active) ? 'fulfilled' : comments.status,
  items: comments[id],
  error
});

const CommentsList = ({ show, items }) => {
  return (
    <CSSTransition
      in={show}
      timeout={{
        enter: 1000,
        exit: 1000,
      }}
      classNames='comments'
      appear
      mountOnEnter
      unmountOnExit
    >
      <div>
        {items.map((item) => (<CommentItem {...item}/>))}
      </div>
    </CSSTransition>
  );
};

CommentsList.defaultProps = {
  items: []
}

export default connect(mapStateToProps, null)(WithLoader(WithErrors(CommentsList)));