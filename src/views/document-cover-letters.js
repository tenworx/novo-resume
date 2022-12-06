import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './document-cover-letters.css'

const DocumentCoverLetters = (props) => {
  return (
    <div className="document-cover-letters-container">
      <Helmet>
        <title>Document-Cover-Letters - Perfect Resume</title>
        <meta
          property="og:title"
          content="Document-Cover-Letters - Perfect Resume"
        />
      </Helmet>
      <header
        data-thq="thq-navbar"
        className="document-cover-letters-navbar-interactive"
      >
        <Link to="/" className="document-cover-letters-navlink">
          <img
            alt="logo"
            src="/playground_assets/perfect%20resume-03-1500h.png"
            className="document-cover-letters-logo"
          />
        </Link>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="document-cover-letters-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="document-cover-letters-nav"
          >
            <div className="document-cover-letters-container01">
              <div className="document-cover-letters-container02">
                <Link
                  to="/my-documents"
                  className="document-cover-letters-navlink1"
                >
                  Resumes
                </Link>
              </div>
              <div className="document-cover-letters-container03">
                <button className="document-cover-letters-register">
                  Cover Letters
                </button>
              </div>
            </div>
          </nav>
        </div>
        <div
          data-thq="thq-mobile-menu"
          className="document-cover-letters-mobile-menu"
        >
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="document-cover-letters-nav1"
          >
            <div className="document-cover-letters-container04">
              <Link to="/" className="document-cover-letters-navlink2">
                <img
                  alt="image"
                  src="/playground_assets/perfect%20resume-03-1500h.png"
                  className="document-cover-letters-image"
                />
              </Link>
              <div
                data-thq="thq-close-menu"
                className="document-cover-letters-menu-close"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="document-cover-letters-icon"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="document-cover-letters-nav2"
            >
              <Link
                to="/my-documents"
                className="document-cover-letters-navlink3"
              >
                Resumes
              </Link>
              <Link
                to="/document-cover-letters"
                className="document-cover-letters-navlink4"
              >
                Cover Letters
              </Link>
            </nav>
            <div className="document-cover-letters-container05">
              <Link
                to="/register"
                className="document-cover-letters-register1 Content"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="document-cover-letters-login Content"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
        <div
          data-thq="thq-burger-menu"
          className="document-cover-letters-burger-menu"
        >
          <svg viewBox="0 0 1024 1024" className="document-cover-letters-icon2">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
      </header>
      <div className="document-cover-letters-container06">
        <div className="document-cover-letters-container07">
          <div className="document-cover-letters-container08">
            <div className="document-cover-letters-container09">
              <h1 className="document-cover-letters-text">Cover Letter</h1>
            </div>
          </div>
          <div className="document-cover-letters-container10">
            <div className="document-cover-letters-container11">
              <h1 className="document-cover-letters-text1">
                Documents Created: 1/18
              </h1>
            </div>
            <div className="document-cover-letters-container12">
              <h1 className="document-cover-letters-text2">Sort: Date A-Z</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="document-cover-letters-container13">
        <div className="document-cover-letters-container14">
          <div className="document-cover-letters-container15">
            <h1 className="document-cover-letters-text3">My Content BETA</h1>
            <span className="document-cover-letters-text4">
              Your place for the data you use most often.
            </span>
          </div>
          <div className="document-cover-letters-container16"></div>
        </div>
      </div>
    </div>
  )
}

export default DocumentCoverLetters
