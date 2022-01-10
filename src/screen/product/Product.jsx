import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Table, Image, Button } from 'react-bootstrap'
import { getProductList } from '../../actions/productActions'
import Loader from '../../component/Loader'
import Message from '../../component/Message'
import { LinkContainer } from 'react-router-bootstrap'
const Product = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { products, loading, error } = useSelector((state) => state.productList)
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  useEffect(() => {
    if (!userInfo) {
      navigate('/signin')
    } else {
      dispatch(getProductList())
    }
  }, [dispatch, navigate, userInfo])
  return (
    <Container className='mt-3'>
      <h2>Product List</h2>
      <Table striped bordered hover responsive className='table-sm'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {loading === true && <Loader />}
        {error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>
                  <Image
                    src={product.productPictures[0].img}
                    alt={product.productName}
                    fluid
                    rounded
                    style={{ height: '50px', width: '50px' }}
                  />
                </td>
                <td>{product.productName}</td>
                <td>
                  {product.isActive ? (
                    <i className='fas fa-check' style={{ color: 'green' }}></i>
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/product/${product._id}`}>
                    <Button variant='light' className='btn-sm'>
                      <i className='fas fa-edit'></i>
                    </Button>
                  </LinkContainer>
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

export default Product
