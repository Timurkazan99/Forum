import React from 'react';
import {connect} from "react-redux";
import WithLoader from "../hocs/WithLoader.jsx";
import PostsList from "./PostsList.jsx";
import PageList from "./PageList.jsx";
import {CSSTransition} from "react-transition-group";

const mapStateToProps = ({posts}) => ({ status: posts.status, items: posts.items });

const PostsGroup = ({status, items}) => {
  return (
    <CSSTransition
      in={status === 'fulfilled'}
      timeout={{
        enter: 2000,
      }}
      classNames='posts'
      appear
      mountOnEnter
      unmountOnExit
    >
      <div className='d-flex align-items-center flex-column'>
        <PostsList items={items}/>
        <PageList />
      </div>
    </CSSTransition>
  );
};

export default connect(mapStateToProps, null)(WithLoader(PostsGroup));