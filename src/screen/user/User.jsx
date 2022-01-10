import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Table, Image, Button } from 'react-bootstrap'
import { getUserList } from '../../actions/userActions'
import Loader from '../../component/Loader'
import Message from '../../component/Message'
import { useNavigate } from 'react-router-dom'

const User = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { users, loading, error } = useSelector((state) => state.userList)
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  useEffect(() => {
    if (!userInfo) {
      navigate('/')
    }
    dispatch(getUserList())
  }, [dispatch, navigate, userInfo])
  return (
    <Container className='mt-3'>
      <h2>User List</h2>
      <Table striped bordered hover responsive className='table-sm'>
        <thead>
          <tr>
            <th>Profile</th>
            <th>Name</th>
            <th>Email</th>
            <th>Active</th>
            <th>Action</th>
          </tr>
        </thead>
        {loading === true && <Loader />}
        {error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>
                  <Image
                    src={user.profilePicture}
                    alt={user.firstName}
                    fluid
                    rounded
                    style={{ height: '50px', width: '50px' }}
                  />
                </td>
                <td>
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.email}</td>
                <td>
                  {user.isActive ? (
                    <i className='fas fa-check' style={{ color: 'green' }}></i>
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  <Button variant='light' className='btn-sm'>
                    <i className='fas fa-edit'></i>
                  </Button>
                  <Button variant='light' className='btn-sm'>
                    <i className='fas fa-trash'></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </Table>
    </Container>
  )
}

export default User
