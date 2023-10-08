//import css
import './navbar.css'
// now create some routes
import { Link, useNavigate } from 'react-router-dom'

function NavBar() {

  const auth = localStorage.getItem('user')
  const navigate = useNavigate();

  const logout = () => {
  
    localStorage.clear();
    navigate('/signup')

    // onclick the navigate will called and it will re-render the navigation
  }

  return (
    <div className='App'>
      <nav>
        {auth ? <ul className='navul'>
      <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4RXazKs9h_rYDFGeRCLSjY5jctwKozm3005HivZltuw&s" alt="logo" className='nav-img'/></li>

          <li><Link to='/'>Products</Link></li>
          <li><Link to='/add'>Add Product</Link></li>
          {/* <li><Link to='/update/:id'>Update Product</Link></li> */}
          <li><Link to='/profile'>Profile</Link></li>
          <li><Link onClick={logout} to='/signup'> Logout &nbsp;: {JSON.parse(auth).name}</Link></li>

        </ul>
          :
          <ul className='navul nav-right'>

            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>SignUp</Link></li>
            <li ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4RXazKs9h_rYDFGeRCLSjY5jctwKozm3005HivZltuw&s" alt="logo" className='nav-img' /></li>
          </ul>

        }

      </nav>
    </div>
  )
}

export default NavBar