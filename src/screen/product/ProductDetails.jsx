import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import {
  Row,
  Col,
  Container,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from 'react-bootstrap'
import Rating from '../../component/Rating'
import Message from '../../component/Message'
import Loader from '../../component/Loader'
import { getProductById } from '../../actions/productActions'

const ProductDetails = () => {
  const { productId } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { product, loading, error } = useSelector((state) => state.getProduct)

  useEffect(() => {
    dispatch(getProductById(productId))
  }, [dispatch, productId])

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Image
            src={product.productPictures[0].img}
            alt={product.productName}
            fluid
            rounded
            style={{ height: '50px', width: '50px' }}
          />
        </Col>
        {/* <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>{product.productName}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.productRating} text={`${20} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.productPrice}</ListGroup.Item>
            <ListGroup.Item>
              Description: {product.productDescription}
            </ListGroup.Item>
          </ListGroup>
        </Col> */}
        {/* <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.productPrice}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.isActive ? (
                      <i
                        className='fas fa-check'
                        style={{ color: 'green' }}
                      ></i>
                    ) : (
                      <i className='fas fa-times' style={{ color: 'red' }}></i>
                    )}
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col> */}
      </Row>
    </Container>
  )
}

export default ProductDetails
