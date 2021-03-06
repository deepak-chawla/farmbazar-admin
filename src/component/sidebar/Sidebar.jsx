import './sidebar.css'
import { LineStyle, PermIdentity, Storefront } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Sidebar() {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  if (userInfo)
    return (
      <div className='sidebar'>
        <div className='sidebarWrapper'>
          <div className='sidebarMenu'>
            <h3 className='sidebarTitle'>Dashboard</h3>
            <ul className='sidebarList'>
              <Link to='/' className='link'>
                <li className='sidebarListItem'>
                  <LineStyle className='sidebarIcon' />
                  Home
                </li>
              </Link>
              <Link to='/users' className='link'>
                <li className='sidebarListItem'>
                  <PermIdentity className='sidebarIcon' />
                  Users
                </li>
              </Link>
              <Link to='/products' className='link'>
                <li className='sidebarListItem'>
                  <Storefront className='sidebarIcon' />
                  Products
                </li>
              </Link>
              <Link to='/orders' className='link'>
                <li className='sidebarListItem'>
                  <Storefront className='sidebarIcon' />
                  Orders
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    )
  else return null
}
