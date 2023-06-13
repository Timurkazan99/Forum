import React, {useEffect, useState} from 'react';
import {Button, Form, InputGroup} from "react-bootstrap";
import {useDispatch} from "react-redux";
import useDebounce from "../hooks/useDebonce";
import {fetchPostsCreator} from "../store/actions";
import useQueryParams from "../hooks/useQueryParams";

const SearchInput = () => {
  const dispatch = useDispatch();
  const {getParams, update} = useQueryParams();
  const initState = getParams().title || '';
  const [value, setValue] = useState(initState);
  const debouncedSearchTerm = useDebounce(value, 1000);
  const onClick = () => {
    setValue('');
    update(1, null);
    dispatch(fetchPostsCreator(1));
  }

  useEffect(() => {
      if (debouncedSearchTerm !== initState) {
        update(1, debouncedSearchTerm);
        dispatch(fetchPostsCreator(1));
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