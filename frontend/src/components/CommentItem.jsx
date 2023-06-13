import React from 'react';
import {Card} from "react-bootstrap";

const CommentItem = (props) => {
  return (
      <Card bg='secondary' className='mb-2'>
        <Card.Header>
          <h6>{props.email}</h6>
        </Card.Header>
        <Card.Body>
          {props.body}
        </Card.Body>
      </Card>
  );
};

export default CommentItem;