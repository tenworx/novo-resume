import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './register.css'

const Register = (props) => {
  return (
    <div className="register-container">
      <Helmet>
        <title>Register - Perfect Resume</title>
        <meta property="og:title" content="Register - Perfect Resume" />
      </Helmet>
      <div className="register-container01">
        <div className="register-container02">
          <img
            alt="image"
            src="/playground_assets/undraw_access_account_re_8spm.svg"
            className="register-image"
          />
        </div>
        <div className="register-container03">
          <div className="register-container04">
            <div className="register-container05">
              <button className="register-register">Register Now</button>
              <div className="register-container06">
                <Link to="/login" className="register-navlink">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
          <div className="register-container07">
            <input
              type="text"
              placeholder="Given Name"
              className="register-textinput"
            />
            <input
              type="text"
              placeholder="Family Name"
              className="register-textinput1"
            />
          </div>
          <div className="register-container08">
            <input
              type="text"
              placeholder="Email"
              className="register-textinput2"
            />
          </div>
          <div className="register-container09">
            <input type="radio" name="radio" className="register-radiobutton" />
            <span className="register-text">
              I consent to the Terms &amp; Privacy Policy
            </span>
          </div>
          <div className="register-container10">
            <Link to="/document-cover-letters" className="register-register1">
              Register Now
            </Link>
          </div>
          <div className="register-container11">
            <span className="register-text1">Or Sign Up with:</span>
          </div>
          <div className="register-container12">
            <button className="register-register2">Google</button>
          </div>
          <div className="register-container13">
            <span className="register-text2">
              A password can be set after you sign up if you prefer. Meanwhile,
              your information is secure and private.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
