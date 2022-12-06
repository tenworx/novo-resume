import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './my-documents.css'

const MyDocuments = (props) => {
  return (
    <div className="my-documents-container">
      <Helmet>
        <title>My-Documents - Perfect Resume</title>
        <meta property="og:title" content="My-Documents - Perfect Resume" />
      </Helmet>
      <header data-thq="thq-navbar" className="my-documents-navbar-interactive">
        <Link to="/" className="my-documents-navlink">
          <img
            alt="logo"
            src="/playground_assets/perfect%20resume-03-1500h.png"
            className="my-documents-logo"
          />
        </Link>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="my-documents-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="my-documents-nav"
          >
            <div className="my-documents-container01">
              <div className="my-documents-container02">
                <button className="my-documents-register">Resumes</button>
              </div>
              <div className="my-documents-container03">
                <Link
                  to="/document-cover-letters"
                  className="my-documents-navlink1"
                >
                  Cover Letters
                </Link>
              </div>
            </div>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="my-documents-burger-menu">
          <svg viewBox="0 0 1024 1024" className="my-documents-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="my-documents-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="my-documents-nav1"
          >
            <div className="my-documents-container04">
              <img
                alt="image"
                src="/playground_assets/perfect%20resume-03-1500h.png"
                className="my-documents-image"
              />
              <div
                data-thq="thq-close-menu"
                className="my-documents-menu-close"
              >
                <svg viewBox="0 0 1024 1024" className="my-documents-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="my-documents-nav2"
            >
              <Link to="/my-documents" className="my-documents-navlink2">
                Resumes
              </Link>
              <Link
                to="/document-cover-letters"
                className="my-documents-navlink3"
              >
                Cover Letters
              </Link>
            </nav>
            <div className="my-documents-container05">
              <Link to="/register" className="my-documents-register1 Content">
                Register
              </Link>
              <Link to="/login" className="my-documents-login Content">
                Sign In
              </Link>
            </div>
          </div>
          <div className="my-documents-icon-group">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="my-documents-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="my-documents-icon06"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="my-documents-icon08"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="my-documents-container06">
        <div className="my-documents-container07">
          <div className="my-documents-container08">
            <div className="my-documents-container09">
              <h1 className="my-documents-text">Resume</h1>
              <span className="my-documents-text01">0-5 Years experience</span>
            </div>
            <div className="my-documents-container10">
              <h1 className="my-documents-text02">CV</h1>
              <span>5+ Years experience</span>
            </div>
          </div>
          <div className="my-documents-container11">
            <div className="my-documents-container12">
              <h1 className="my-documents-text04">Documents Created: 1/18</h1>
            </div>
            <div className="my-documents-container13">
              <h1 className="my-documents-text05">Sort: Date A-Z</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="my-documents-container14">
        <div className="my-documents-container15">
          <div className="my-documents-container16">
            <div className="my-documents-container17">
              <h1 className="my-documents-text06">Resume</h1>
              <span className="my-documents-text07">0-5 Years experience</span>
            </div>
            <div className="my-documents-container18">
              <h1 className="my-documents-text08">CV</h1>
              <span className="my-documents-text09">5+ Years experience</span>
            </div>
          </div>
        </div>
      </div>
      <div className="my-documents-container19">
        <div className="my-documents-container20">
          <div className="my-documents-container21">
            <h1 className="my-documents-text10">My Content BETA</h1>
            <span className="my-documents-text11">
              Your place for the data you use most often.
            </span>
          </div>
          <div className="my-documents-container22"></div>
          <div className="my-documents-container23"></div>
        </div>
        <div className="my-documents-container24">
          <div className="my-documents-container25">
            <h1 className="my-documents-text12">My Content BETA</h1>
            <span className="my-documents-text13">
              Your place for the data you use most often.
            </span>
          </div>
          <div className="my-documents-container26"></div>
          <div className="my-documents-container27"></div>
        </div>
        <div className="my-documents-container28">
          <div className="my-documents-container29">
            <h1 className="my-documents-text14">My Content BETA</h1>
            <span className="my-documents-text15">
              Your place for the data you use most often.
            </span>
          </div>
          <div className="my-documents-container30"></div>
          <div className="my-documents-container31"></div>
        </div>
      </div>
    </div>
  )
}

export default MyDocuments
