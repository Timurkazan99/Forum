import React, {useEffect} from 'react';
import {Container} from "react-bootstrap";
import SearchInput from "../components/SearchInput.jsx";
import {useDispatch} from "react-redux";
import {fetchPostsCreator} from "../store/actions";
import useQueryParams from "../hooks/useQueryParams";
import PostsGroup from "../components/PostsGroup.jsx";
import PostsHeader from "../components/PostsHeader.jsx";
import '../styles/posts.scss';

const Post = () => {
  const dispatch = useDispatch();
  const {getParams, update} = useQueryParams();

  useEffect(() => {
    const {page} = getParams();
    if (!page) {
      update(1);
    }
    dispatch(fetchPostsCreator(page));
  }, []);

  return (
    <Container className='posts-container' >
      <SearchInput />
      <PostsHeader />
      <PostsGroup show />
    </Container>
  );
};

export default Post;