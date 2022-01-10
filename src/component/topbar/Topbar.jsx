import React from 'react'
import './topbar.css'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../actions/userActions'

export const Topbar = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <Navbar
      bg='success'
      style={{ height: '70px', position: 'sticky' }}
      variant='light'
      collapseOnSelect
    >
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>Farm Bazar</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            {userInfo ? (
              <NavDropdown title={userInfo.fullName}>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to='/signin'>
                <Nav.Link>
                  <i className='fas fa-user'></i> Signin
                </Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Topbar
