import React, {useEffect, useState} from 'react';
import {Button, Form, InputGroup} from "react-bootstrap";
import {batch, useDispatch} from "react-redux";
import useDebounce from "../hooks/useDebonce";
import {fetchPostsCreator, setFindPostCreator} from "../store/actions";
import useQueryParams from "../hooks/useQueryParams";

const SearchInput = () => {
  const dispatch = useDispatch();
  const {getParams, update} = useQueryParams();
  const initState = getParams().search || '';
  const [value, setValue] = useState(initState);
  const debouncedSearchTerm = useDebounce(value, 1000);
  const onClick = () => {
    setValue('');
    batch(() => {
      dispatch(fetchPostsCreator(1));
    });
    update(1);
  }

  useEffect(() => {
      if (debouncedSearchTerm !== initState) {
        batch(() => {
          dispatch(setFindPostCreator(1, debouncedSearchTerm));
        });
        update(1, debouncedSearchTerm);
      }
    },
    [debouncedSearchTerm]
  );

  return (
    <InputGroup className='mb-2'>
      <Form.Control
        value={value}
        onChange={({target}) => setValue(target.value)}
        placeholder='Найти'
      />
      <Button variant="danger" onClick={onClick}>
        Очистить
      </Button>
    </InputGroup>
  );
};

export default SearchInput;