import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Login - Perfect Resume</title>
        <meta property="og:title" content="Login - Perfect Resume" />
      </Helmet>
      <div className="login-container01">
        <div className="login-container02">
          <img
            alt="image"
            src="/playground_assets/undraw_access_account_re_8spm.svg"
            className="login-image"
          />
        </div>
        <div className="login-container03">
          <div className="login-container04">
            <div className="login-container05">
              <div className="login-container06">
                <Link to="/register" className="login-navlink">
                  Register
                </Link>
              </div>
              <button className="login-register">Sign In</button>
            </div>
          </div>
          <div className="login-container07">
            <input
              type="text"
              placeholder="Email"
              className="login-textinput"
            />
          </div>
          <div className="login-container08">
            <span className="login-text">
              We will send you a one-time sign in link.
            </span>
          </div>
          <div className="login-container09">
            <Link to="/my-profile" className="login-register1">
              Sign in with Magic Link
            </Link>
          </div>
          <div className="login-container10">
            <button className="login-register2">Switch to Password</button>
          </div>
          <div className="login-container11">
            <span className="login-text1">Or Sign In with:</span>
          </div>
          <div className="login-container12">
            <button className="login-register3">Google</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
