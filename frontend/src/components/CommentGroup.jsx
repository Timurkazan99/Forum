import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import CommentsList from "./CommentsList.jsx";
import {batch, useDispatch} from "react-redux";
import {fetchCommentsCreator, setCommentsActive} from "../store/actions";
import {CSSTransition} from "react-transition-group";

const CommentGroup = ({ id }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const onClick = () => {
    if (!show) {
      batch(() => {
        dispatch(setCommentsActive(id));
        dispatch(fetchCommentsCreator(id));
      });
    }
    setShow(!show);
  };

  return (
    <div className='comments-wrapper'>
      <Button variant='secondary' onClick={onClick}>Комментарии</Button>
      <CSSTransition
        in={show}
        timeout={{
          enter: 1000,
          exit: 1000,
        }}
        classNames='loader'
        mountOnEnter
        unmountOnExit
      >
        <CommentsList show={show} id={id} placeholder='Нету комментариев' />
      </CSSTransition>
    </div>
  );
};

export default CommentGroup;