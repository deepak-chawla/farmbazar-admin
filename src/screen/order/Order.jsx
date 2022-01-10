import { useNavigate } from 'react-router-dom'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Table } from 'react-bootstrap'
import { getOrderList } from '../../actions/orderActions'
import Loader from '../../component/Loader'
import Message from '../../component/Message'

const Order = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { orders, loading, error } = useSelector((state) => state.orderList)
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  useEffect(() => {
    if (!userInfo) {
      navigate('/signin')
    }
    dispatch(getOrderList())
  }, [dispatch, navigate, userInfo])

  return (
    <Container className='mt-3'>
      <h2>Order List</h2>
      <Table striped bordered hover responsive className='table-sm'>
        <thead>
          <th>Active Status</th>
          <th>Customer Name</th>
          <th>Contact Number</th>
          <th>Product</th>
          <th>Shop Name</th>
          <th>Sub Total</th>
          <th>Order Status</th>
        </thead>
        {loading === true && <Loader />}
        {error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>
                  {order.isActive ? (
                    <i className='fas fa-check' style={{ color: 'green' }}></i>
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>{order.name}</td>
                <td>{order.contactNumber}</td>
                <td>{order.productId.productName}</td>
                <td>{order.storeId.storeName}</td>
                <td>{order.subTotal}</td>
                <td>{order.orderStatus}</td>
              </tr>
            ))}
          </tbody>
        )}
      </Table>
    </Container>
  )
}

export default Order
