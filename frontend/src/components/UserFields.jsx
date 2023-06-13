import React from 'react';
import {Col} from "react-bootstrap";
import Field from "./Field.jsx";
import getProperty from "../utils/getProperty";
import WithMobile from "../hocs/WithMobile.jsx";

const oneColumn = [
  {
    label: 'Имя пользователя',
    name: 'username',
  },
  {
    label: 'Имя и фамилия',
    name: 'name',
  },
  {
    label: 'Электроная почта',
    name: 'email',
  },
  {
    label: 'Телефон',
    name: 'phone',
  },
  {
    label: 'Город',
    name: 'address.city',
  },
  {
    label: 'Компания',
    name: 'company.name'
  }
]

const firstColumn = [
  {
    label: 'Имя пользователя',
    name: 'username',
  },
  {
    label: 'Электроная почта',
    name: 'email',
  },
  {
    label: 'Город',
    name: 'address.city',
  }
];

const secondColumn = [
  {
    label: 'Имя и фамилия',
    name: 'name',
  },
  {
    label: 'Телефон',
    name: 'phone',
  },
  {
    label: 'Компания',
    name: 'company.name'
  }
];

const UserFields = ({ isMobile, item }) => {

  if (isMobile) {
    return (
      <Col>
        {oneColumn.map(({name, label}, id) => (
          <Field
            key={id}
            label={label}
            value={getProperty(item, name)}
            className='mb-2'
          />
        ))}
      </Col>
    )
  }

  return (
    <>
      <Col>
        {firstColumn.map(({name, label}, id) => (
          <Field
            key={id}
            label={label}
            value={getProperty(item, name)}
            className='mb-2'
          />
        ))}
      </Col>
      <Col>
        {secondColumn.map(({name, label}, id) => (
          <Field
            key={id}
            label={label}
            value={getProperty(item, name)}
            className='mb-2'
          />
        ))}
      </Col>
    </>
  );
};

UserFields.defaultProps = {
  isMobile: false
}

export default WithMobile(UserFields);