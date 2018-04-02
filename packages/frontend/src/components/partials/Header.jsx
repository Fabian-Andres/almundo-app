import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo-almundo.svg';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <header>
        <Container fluid>
          <Row>
            <Col sm="12">
              <nav className="navbar navbar-expand-lg w-100">
                <NavLink exact rel="noopener noreferrer" to="/" className="navbar-brand mr-auto" ><img className="img-fluid" src={logo} alt="almundo.com" /></NavLink>
              </nav>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}
