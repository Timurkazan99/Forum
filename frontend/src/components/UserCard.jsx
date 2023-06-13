import React from 'react';
import {Button, Card, Col, Image, Row} from "react-bootstrap";
import {connect} from "react-redux";
import WithLoader from "../hocs/WithLoader.jsx";
import {useNavigate} from 'react-router-dom';
import {CSSTransition} from "react-transition-group";
import UserFields from "./UserFields.jsx";

const mapStateToProps = ({user: {status, ...item}}) => ({ status, item });

const UserCard = ({ status, item }) => {
  const navigate = useNavigate();

  return (
    <CSSTransition
      in={status === 'fulfilled'}
      timeout={{
        enter: 2000,
      }}
      classNames='users'
      appear
      mountOnEnter
      unmountOnExit
    >
      <div>
        <Card bg='secondary'>
          <Card.Header>
            <Button
              onClick={() => navigate(-1)}
              variant='secondary'
            >
              Назад
            </Button>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col lg={1} md={2} sm={3} xs={3}>
                <Image
                  src='https://placehold.jp/75x75.png'
                  style={{
                    height: '75px',
                    width: '75px'
                  }}
                />
              </Col>
              <UserFields item={item} />
            </Row>
          </Card.Body>
        </Card>
      </div>
    </CSSTransition>
  );
};

export default connect(mapStateToProps, null)(WithLoader(UserCard));