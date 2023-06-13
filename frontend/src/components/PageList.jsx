import React from 'react';
import {Pagination} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import pagesCreator from "../utils/pagesCreator";
import {fetchPostsCreator} from "../store/actions";
import useQueryParams from "../hooks/useQueryParams";
import WithMobile from "../hocs/WithMobile.jsx";

const PageList = ({isMobile}) => {
  const dispatch = useDispatch();
  const {getParams, update} = useQueryParams();
  const { page } = getParams();
  const { maxPage } = useSelector((state) => state.posts);

  const pages = pagesCreator(page, maxPage);
  const onClickCreator = (number) => (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    if (number !== page) {
      update(number);
      dispatch(fetchPostsCreator(number));
    }
  }

  return (
    <div>
      <Pagination size={isMobile ? 'sm' : 'md'}>
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
    </div>
  );
};

export default WithMobile(PageList);