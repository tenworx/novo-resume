import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './my-profile.css'

const MyProfile = (props) => {
  return (
    <div className="my-profile-container">
      <Helmet>
        <title>My-Profile - Perfect Resume</title>
        <meta property="og:title" content="My-Profile - Perfect Resume" />
      </Helmet>
      <header data-thq="thq-navbar" className="my-profile-navbar-interactive">
        <Link to="/" className="my-profile-navlink">
          <img
            alt="logo"
            src="/playground_assets/perfect%20resume-03-1500h.png"
            className="my-profile-logo"
          />
        </Link>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="my-profile-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="my-profile-nav"
          >
            <Link to="/resume-templates" className="my-profile-navlink1">
              Resume Templates
            </Link>
            <Link to="/c-v-templates" className="my-profile-navlink2">
              CV Templates
            </Link>
            <Link to="/cover-letters" className="my-profile-navlink3">
              Cover Letters
            </Link>
            <Link to="/pricing" className="my-profile-navlink4">
              Pricing
            </Link>
          </nav>
          <div
            data-thq="thq-dropdown"
            className="my-profile-thq-dropdown list-item"
          >
            <ul
              data-thq="thq-dropdown-list"
              className="my-profile-dropdown-list"
            >
              <li
                data-thq="thq-dropdown"
                className="my-profile-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="my-profile-dropdown-toggle"
                >
                  <span className="my-profile-text">All Articles</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="my-profile-dropdown01 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="my-profile-dropdown-toggle01"
                >
                  <span className="my-profile-text01">Resume CV Writing</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="my-profile-dropdown02 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="my-profile-dropdown-toggle02"
                >
                  <span className="my-profile-text02">
                    Cover Letter Writing
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="my-profile-dropdown03 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="my-profile-dropdown-toggle03"
                >
                  <span className="my-profile-text03">Examples</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="my-profile-dropdown04 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="my-profile-dropdown-toggle04"
                >
                  <span className="my-profile-text04">
                    Personal Development
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="my-profile-dropdown05 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="my-profile-dropdown-toggle05"
                >
                  <span className="my-profile-text05">Inspiring Stories</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="my-profile-dropdown06 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="my-profile-dropdown-toggle06"
                >
                  <span className="my-profile-text06">
                    Interviews &amp; Find Jobs
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div
            data-thq="thq-dropdown"
            className="my-profile-thq-dropdown1 list-item"
          >
            <ul
              data-thq="thq-dropdown-list"
              className="my-profile-dropdown-list1"
            >
              <li
                data-thq="thq-dropdown"
                className="my-profile-dropdown07 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="my-profile-dropdown-toggle07"
                >
                  <span className="my-profile-text07">EN US</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="my-profile-dropdown08 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="my-profile-dropdown-toggle08"
                >
                  <span className="my-profile-text08">Dansk</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="my-profile-dropdown09 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="my-profile-dropdown-toggle09"
                >
                  <span className="my-profile-text09">Deutsch</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="my-profile-dropdown10 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="my-profile-dropdown-toggle10"
                >
                  <span className="my-profile-text10">English US</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="my-profile-dropdown11 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="my-profile-dropdown-toggle11"
                >
                  <span className="my-profile-text11">English UK</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="my-profile-dropdown12 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="my-profile-dropdown-toggle12"
                >
                  <span className="my-profile-text12">Espanol</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div data-thq="thq-navbar-btn-group" className="my-profile-btn-group">
          <Link to="/my-documents" className="my-profile-register">
            My Documents
          </Link>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1669430014055-76d0be3fefc1?ixid=Mnw5MTMyMXwwfDF8YWxsfDE4M3x8fHx8fDJ8fDE2Njk2Mzg3OTM&amp;ixlib=rb-4.0.3&amp;w=200"
            className="my-profile-image"
          />
          <svg viewBox="0 0 1024 1024" className="my-profile-icon">
            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
          </svg>
        </div>
        <div data-thq="thq-burger-menu" className="my-profile-burger-menu">
          <svg viewBox="0 0 1024 1024" className="my-profile-icon02">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="my-profile-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="my-profile-nav1"
          >
            <div className="my-profile-container01">
              <img
                alt="image"
                src="/playground_assets/perfect%20resume-03-1500h.png"
                className="my-profile-image1"
              />
              <div data-thq="thq-close-menu" className="my-profile-menu-close">
                <svg viewBox="0 0 1024 1024" className="my-profile-icon04">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="my-profile-nav2"
            >
              <Link to="/resume-templates" className="my-profile-navlink5">
                Resume Templates
              </Link>
              <Link to="/c-v-templates" className="my-profile-navlink6">
                CV Templates
              </Link>
              <Link to="/cover-letters" className="my-profile-navlink7">
                Cover Letters
              </Link>
              <Link to="/pricing" className="my-profile-navlink8">
                Pricing
              </Link>
            </nav>
            <div className="my-profile-container02">
              <Link to="/register" className="my-profile-register1 Content">
                Register
              </Link>
              <Link to="/login" className="my-profile-login Content">
                Sign In
              </Link>
            </div>
          </div>
          <div className="my-profile-icon-group">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="my-profile-icon06"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="my-profile-icon08"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="my-profile-icon10"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="my-profile-container03">
        <h1 className="my-profile-text13">Sheriff</h1>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1669430014055-76d0be3fefc1?ixid=Mnw5MTMyMXwwfDF8YWxsfDE4M3x8fHx8fDJ8fDE2Njk2Mzg3OTM&amp;ixlib=rb-4.0.3&amp;w=200"
          className="my-profile-image2"
        />
      </div>
      <div className="my-profile-container04">
        <div className="my-profile-container05">
          <div className="my-profile-container06">
            <h1 className="my-profile-text14">Account Type</h1>
            <span className="my-profile-text15">Basic</span>
          </div>
          <div className="my-profile-container07"></div>
          <div className="my-profile-container08">
            <h1 className="my-profile-text16">Valid until</h1>
            <span className="my-profile-text17">Unlimited</span>
          </div>
        </div>
        <div className="my-profile-container09">
          <div className="my-profile-container10">
            <div className="my-profile-container11">
              <img
                alt="image"
                src="/playground_assets/rocket-removebg-preview-200w.png"
                className="my-profile-image3"
              />
              <div className="my-profile-container12">
                <h1 className="my-profile-text18">Skyrocket your Career!</h1>
                <span className="my-profile-text19">
                  11 extra features at your disposal.
                </span>
              </div>
            </div>
            <Link to="/my-documents" className="my-profile-register2">
              Upgrade now
            </Link>
          </div>
        </div>
        <div className="my-profile-container13">
          <div className="my-profile-container14">
            <div className="my-profile-container15">
              <div className="my-profile-container16">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1669430014055-76d0be3fefc1?ixid=Mnw5MTMyMXwwfDF8YWxsfDE4M3x8fHx8fDJ8fDE2Njk2Mzg3OTM&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="my-profile-image4"
                />
                <h1 className="my-profile-text20">Account</h1>
                <h1 className="my-profile-text21">Edit</h1>
              </div>
              <div className="my-profile-container17">
                <div className="my-profile-container18">
                  <div className="my-profile-container19">
                    <h1 className="my-profile-text22">Given Name</h1>
                    <h1 className="my-profile-text23">Sheriff</h1>
                  </div>
                  <div className="my-profile-container20">
                    <h1 className="my-profile-text24">Birthday</h1>
                    <h1 className="my-profile-text25">Not Given</h1>
                  </div>
                </div>
                <div className="my-profile-container21">
                  <h1 className="my-profile-text26">Family Name</h1>
                  <h1 className="my-profile-text27">Sheriff</h1>
                </div>
              </div>
            </div>
            <div className="my-profile-container22">
              <div className="my-profile-container23">
                <svg viewBox="0 0 1024 1024" className="my-profile-icon12">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <h1 className="my-profile-text28">Email</h1>
                <h1 className="my-profile-text29">Change</h1>
              </div>
              <div className="my-profile-container24">
                <div className="my-profile-container25">
                  <div className="my-profile-container26">
                    <h1 className="my-profile-text30">Account Email</h1>
                    <h1 className="my-profile-text31">sheriff@gmail.com</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-profile-container27">
            <div className="my-profile-container28">
              <div className="my-profile-container29">
                <svg viewBox="0 0 1024 1024" className="my-profile-icon14">
                  <path d="M768 854v-428h-512v428h512zM380 256v86h264v-86q0-54-39-93t-93-39-93 39-39 93zM768 342q34 0 60 25t26 59v428q0 34-26 59t-60 25h-512q-34 0-60-25t-26-59v-428q0-34 26-59t60-25h42v-86q0-88 63-151t151-63 151 63 63 151v86h42zM512 726q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26z"></path>
                </svg>
                <h1 className="my-profile-text32">Security</h1>
              </div>
              <div className="my-profile-container30">
                <div className="my-profile-container31">
                  <div className="my-profile-container32">
                    <h1 className="my-profile-text33">Password</h1>
                    <h1 className="my-profile-text34">
                      Request Password Change
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-profile-container33">
              <div className="my-profile-container34">
                <svg viewBox="0 0 1024 1024" className="my-profile-icon16">
                  <path d="M917.806 357.076c-22.21-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-368c-44.114 0-80 35.888-80 80v736c0 44.112 35.886 80 80 80h608c44.112 0 80-35.888 80-80v-496c0-14.332-4.372-39.35-42.194-90.924zM785.374 302.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.982 17.78 50.678 41.878 81.374 72.572v0zM896 944c0 8.672-7.328 16-16 16h-608c-8.672 0-16-7.328-16-16v-736c0-8.672 7.328-16 16-16 0 0 367.956-0.002 368 0v224c0 17.672 14.324 32 32 32h224v496z"></path>
                  <path d="M602.924 42.196c-51.574-37.822-76.592-42.196-90.924-42.196h-368c-44.112 0-80 35.888-80 80v736c0 38.632 27.528 70.958 64 78.39v-814.39c0-8.672 7.328-16 16-16h486.876c-9.646-7.92-19.028-15.26-27.952-21.804z"></path>
                </svg>
                <h1 className="my-profile-text35">Preferences</h1>
              </div>
              <div className="my-profile-container35">
                <div className="my-profile-container36">
                  <div className="my-profile-container37">
                    <h1 className="my-profile-text36">Notifications</h1>
                    <div className="my-profile-container38">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="my-profile-icon19"
                      >
                        <path d="M810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h596zM810 214h-596v596h596v-596z"></path>
                      </svg>
                      <h1 className="my-profile-text37">
                        I want to receive valuable career tips and special
                        offers on email.
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-profile-container39">
          <div className="my-profile-container40">
            <svg
              viewBox="0 0 1073.7371428571428 1024"
              className="my-profile-icon21"
            >
              <path d="M1073.714 544c0 13.714-8.571 27.429-17.714 37.714l-192 226.286c-33.143 38.857-100.571 69.714-150.857 69.714h-621.714c-20.571 0-49.714-6.286-49.714-32 0-13.714 8.571-27.429 17.714-37.714l192-226.286c33.143-38.857 100.571-69.714 150.857-69.714h621.714c20.571 0 49.714 6.286 49.714 32zM877.714 347.429v91.429h-475.429c-71.429 0-160 40.571-206.286 95.429l-195.429 229.714c0-4.571-0.571-9.714-0.571-14.286v-548.571c0-70.286 57.714-128 128-128h182.857c70.286 0 128 57.714 128 128v18.286h310.857c70.286 0 128 57.714 128 128z"></path>
            </svg>
            <div className="my-profile-container41">
              <h1 className="my-profile-text38">Personal Data</h1>
              <h1 className="my-profile-text39">
                Here you can get a detailed view of your personal data.
              </h1>
            </div>
          </div>
          <div className="my-profile-container42">
            <svg viewBox="0 0 1024 1024" className="my-profile-icon23">
              <path d="M128 358l60-60 324 324 238-238h-196v-86h342v342h-86v-196l-298 298z"></path>
            </svg>
            <div className="my-profile-container43">
              <h1 className="my-profile-text40">Want to leave us ?</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="my-profile-social-bar">
        <svg viewBox="0 0 950.8571428571428 1024" className="my-profile-icon25">
          <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
        </svg>
        <svg viewBox="0 0 877.7142857142857 1024" className="my-profile-icon27">
          <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
        </svg>
        <svg viewBox="0 0 602.2582857142856 1024" className="my-profile-icon29">
          <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
        </svg>
        <svg viewBox="0 0 877.7142857142857 1024" className="my-profile-icon31">
          <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="my-profile-icon33">
          <path d="M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z"></path>
        </svg>
      </div>
      <footer className="my-profile-footer">
        <div className="my-profile-links-container">
          <div className="my-profile-container44">
            <div className="my-profile-container45">
              <span className="my-profile-text41">Perfect Resume</span>
              <span className="my-profile-text42">Homepage</span>
              <span className="my-profile-text43">Resume Templates</span>
              <span className="my-profile-text44">CV Templates</span>
              <span className="my-profile-text45">Cover Letters</span>
            </div>
            <div className="my-profile-container46">
              <span className="my-profile-text46">Learn</span>
              <span className="my-profile-text47">Career Blog</span>
              <span className="my-profile-text48">How to Write a Resume</span>
              <span className="my-profile-text49">How to Write CV</span>
              <span className="my-profile-text50">
                How to Write a Cover Letter
              </span>
              <span className="my-profile-text51">Resume Examples</span>
              <span className="my-profile-text52">Cover Letter Examples</span>
            </div>
          </div>
          <div className="my-profile-container47">
            <div className="my-profile-container48">
              <span className="my-profile-text53">Other</span>
              <span className="my-profile-text54">Pricing</span>
              <span className="my-profile-text55">About Us</span>
              <span className="my-profile-text56">
                E-book: How to get a job in 2022
              </span>
              <span className="my-profile-text57">Media Kit</span>
              <span className="my-profile-text58">Help Center</span>
            </div>
            <div className="my-profile-container49">
              <span className="my-profile-text59">Resources</span>
              <span className="my-profile-text60">Terms of Use</span>
              <span className="my-profile-text61">Privacy Policy</span>
              <span className="my-profile-text62">Cookie Policy</span>
              <span className="my-profile-text63">
                contact@perfectresume.com
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MyProfile
