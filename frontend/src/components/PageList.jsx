import React from 'react';
import {Pagination} from "react-bootstrap";
import {connect, useDispatch, useSelector} from "react-redux";
import pagesCreator from "../utils/pagesCreator";
import {fetchPostsCreator, setFindPostCreator} from "../store/actions";
import useQueryParams from "../hooks/useQueryParams";
import WithLoader from "../hocs/WithLoader.jsx";

const mapStateToProps = ({posts}) => ({ status: posts.status });

const PageList = () => {
  const dispatch = useDispatch();
  const {getParams, update} = useQueryParams();
  const {page, maxPage, status} = useSelector((state) => state.posts);

  if(status !== 'fulfilled') {
    return null;
  }

  const pages = pagesCreator(page, maxPage);
  const onClickCreator = (number) => (e) => {
    e.preventDefault();
    if (number !== page) {
      const { search } = getParams();
      if (!search) {
        dispatch(fetchPostsCreator(number));
      } else {
        dispatch(setFindPostCreator(number, search));
      }
      update(number, search);
    }
  }

  return (
    <Pagination>
      {pages.map((number) => (
        <Pagination.Item
          key={number}
          active={number === page}
          onClick={onClickCreator(number)}
        >
          {number}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default connect(mapStateToProps, null)(WithLoader(PageList));