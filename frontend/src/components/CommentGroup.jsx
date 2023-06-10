import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import CommentsList from "./CommentsList.jsx";
import {useDispatch} from "react-redux";
import {fetchCommentsCreator} from "../store/actions";

const CommentGroup = ({ id }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const onClick = () => {
    if (!show) {
      dispatch(fetchCommentsCreator(id));
    }
    setShow(!show);
  };

  return (
    <>
      <Button variant='secondary' onClick={onClick}>Комментарии</Button>
      {show && <CommentsList id={id} loader='spinner' placeholder='Нету комментариев' />}
    </>
  );
};

export default CommentGroup;