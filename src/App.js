import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './component/sidebar/Sidebar'
import Topbar from './component/topbar/Topbar'
import Home from './screen/home/Home'
import Product from './screen/product/Product'
import User from './screen/user/User'
import Order from './screen/order/Order'
import Signin from './screen/signin/Signin'
import ProductDetails from './screen/product/ProductDetails'

function App() {
  return (
    <Router>
      <Topbar />
      <div className='main'>
        <Sidebar />
        <Routes>
          <Route path='/signin' element={<Signin />} />
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<User />} />
          <Route path='/orders' element={<Order />} />
          <Route path='/products' element={<Product />} />
          <Route path='/product/:productId' element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
