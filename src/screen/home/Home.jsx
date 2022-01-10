import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios'
import Loader from '../../component/Loader'
import Message from '../../component/Message'
import Slider from '../../component/slider/Slider'
import './home.css'
import { getSlideList } from '../../actions/slideActions'

const Home = () => {
  const dispatch = useDispatch()
  const [productName, setProductName] = useState('')
  const [slide, setSlide] = useState(null)
  const navigate = useNavigate()
  const { slides, loading, error } = useSelector((state) => state.slideList)
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (!userInfo) {
      navigate('/signin')
    } else {
      dispatch(getSlideList())
    }
  }, [dispatch, navigate, userInfo])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('productName', productName)
    formData.append('slide', slide)
    try {
      await axios({
        method: 'post',
        url: 'https://farm-bazar-api.herokuapp.com/admin/slide/add',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container className='mt-3'>
      <h1>Home</h1>
      <Row>
        <Col md={5}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='productName'>
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Product Name'
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='slide'>
              <Form.Label>Slide</Form.Label>
              <Form.Control
                type='file'
                value={slide}
                onChange={(e) => setSlide(e.target.file)}
              ></Form.Control>
            </Form.Group>
            <Button className='mt-3' type='submit' variant='primary'>
              Add Slide
            </Button>
          </Form>
        </Col>
        <Col md={7}>
          {loading === true && <Loader />}
          {error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <Slider slides={slides} />
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default Home
