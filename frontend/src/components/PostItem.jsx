import React from 'react';
import {Card, Image} from "react-bootstrap";
import CommentGroup from "./CommentGroup.jsx";

const PostItem = ({id, title, body}) => {
  return (
    <Card bg='secondary' text='white' className='mb-2 shadow'>
      <Card.Header className='d-flex'>
        <Image
          className="me-2"
          src='https://placehold.jp/50x50.png'
          style={{
            height: '50px',
            width: '50px'
          }}
        />
        <Card.Title>
          {title}
        </Card.Title>
      </Card.Header>
      <Card.Body>{body}</Card.Body>
      <Card.Footer as={() => (<CommentGroup id={id}/>)}/>
    </Card>
  );
};

export default PostItem;