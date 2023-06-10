import React, {useEffect} from 'react';
import PostsList from "../components/PostsList.jsx";
import {Container} from "react-bootstrap";
import PageList from "../components/PageList.jsx";
import SearchInput from "../components/SearchInput.jsx";
import {useDispatch} from "react-redux";
import {fetchPostsCreator, setFindPostCreator} from "../store/actions";
import useQueryParams from "../hooks/useQueryParams";

const Post = () => {
  const dispatch = useDispatch();
  const {getParams} = useQueryParams();

  useEffect(() => {
    const {page, search} = getParams();
    if (!search) {
      dispatch(fetchPostsCreator(page));
    } else {
      dispatch(setFindPostCreator(page, search));
    }
  }, []);

  return (
    <Container>
      <SearchInput />
      <PostsList loader='spinner' placeholder='Нету постов'/>
      <PageList loader='null'/>
    </Container>
  );
};

export default Post;