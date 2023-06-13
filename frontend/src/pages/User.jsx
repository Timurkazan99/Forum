import React, {useEffect} from 'react';
import {Container} from "react-bootstrap";
import UserCard from "../components/UserCard.jsx";
import {batch, useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchPostsCreator, fetchUserCreator} from "../store/actions";
import useQueryParams from "../hooks/useQueryParams";
import PostsHeader from "../components/PostsHeader.jsx";
import '../styles/users.scss'
import PostsGroup from "../components/PostsGroup.jsx";

const User = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {getParams, update} = useQueryParams();

  useEffect(() => {
    const {page} = getParams();
    if (!page) {
      update(1);
    }

    batch(() => {
      dispatch(fetchUserCreator(id))
      dispatch(fetchPostsCreator(1));
    });
  }, []);

  return (
    <Container className='users-container'>
      <UserCard show />
      <PostsHeader />
      <PostsGroup show />
    </Container>
  );
};

export default User;