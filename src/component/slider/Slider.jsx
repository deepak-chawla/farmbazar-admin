import { Carousel } from 'react-bootstrap'
import './slide.css'

const Slider = ({ slides }) => {
  return (
    <Carousel>
      {slides.map((slide) => (
        <Carousel.Item>
          <img
            className='d-block w-100 carouselImage'
            src={slide.slideImage}
            alt='First slide'
          />
          <Carousel.Caption>
            <h3 style={{ color: 'black' }}>{slide.productName}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Slider
