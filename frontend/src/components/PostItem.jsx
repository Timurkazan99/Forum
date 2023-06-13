import React from 'react';
import {Card, Image} from "react-bootstrap";
import CommentGroup from "./CommentGroup.jsx";
import {Link} from "react-router-dom";
import {USER_ROUTE} from "../utils/const";

const PostItem = ({id, title, body}) => {
  return (
    <Card bg='secondary' text='white' className='mb-2 shadow posts-card'>
      <Card.Header className='d-flex'>
        <Link
          to={USER_ROUTE.replace(':id', id)}
        >
          <Image
            className="me-2"
            src='https://placehold.jp/50x50.png'
            style={{
              height: '50px',
              width: '50px'
            }}
          />
        </Link>
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