import Cookies from 'js-cookie'

import {withRouter, Link} from 'react-router-dom'
import './index.css'

const Header = props => {
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <ul className="header-container">
      <Link to="/" className="link-item">
        <li className="home-list-item">
          <button type="button" className="website-img-btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="website-logo"
            />
          </button>
        </li>
      </Link>
      <li className="options-container home-list-item">
        <Link to="/" className="link-item">
          <button type="button" className="home-btn">
            <p className="home">Home</p>
          </button>
        </Link>

        <Link to="/jobs" className="link-item">
          <button type="button" className="home-btn">
            <p className="home">Jobs</p>
          </button>
        </Link>
      </li>
      <li className="home-list-item">
        <button type="button" className="log-out-btn" onClick={onLogout}>
          Logout
        </button>
      </li>
    </ul>
  )
}

export default withRouter(Header)
