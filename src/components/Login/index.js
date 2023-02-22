import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {
    inputName: '',
    inputPassword: '',
    errorMsg: '',
    isShowErrorMsg: false,
  }

  onSuccessLogin = jwt => {
    const {history} = this.props
    Cookies.set('jwt_token', jwt, {expires: 30})
    history.replace('/')
  }

  onSubmitData = async event => {
    const {inputPassword, inputName} = this.state
    event.preventDefault()
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username: inputName, password: inputPassword}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      this.onSuccessLogin(data.jwt_token)
    } else {
      const data = await response.json()
      this.setState({isShowErrorMsg: true, errorMsg: data.error_msg})
    }
    this.setState({inputName: '', inputPassword: ''})
  }

  onChangeName = event => {
    this.setState({inputName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({inputPassword: event.target.value})
  }

  render() {
    const {inputPassword, inputName, errorMsg, isShowErrorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-bg-container">
        <form className="login-form" onSubmit={this.onSubmitData}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <div className="login-input-container">
            <label htmlFor="userName" className="username-label">
              USERNAME
            </label>
            <input
              type="text"
              id="userName"
              placeholder="Username"
              className="user-name-input"
              onChange={this.onChangeName}
              value={inputName}
            />
          </div>
          <div className="login-input-container">
            <label htmlFor="passWord" className="username-label">
              PASSWORD
            </label>
            <input
              type="password"
              id="passWord"
              placeholder="Password"
              className="user-name-input"
              onChange={this.onChangePassword}
              value={inputPassword}
            />
          </div>
          <div className="button-container">
            <button type="submit" className="login-btn">
              Login
            </button>
          </div>
          {isShowErrorMsg && <p className="warning-msg">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default Login
