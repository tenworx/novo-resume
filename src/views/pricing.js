import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './pricing.css'

const Pricing = (props) => {
  return (
    <div className="pricing-container">
      <Helmet>
        <title>Pricing - Perfect Resume</title>
        <meta property="og:title" content="Pricing - Perfect Resume" />
      </Helmet>
      <header data-thq="thq-navbar" className="pricing-navbar-interactive">
        <Link to="/" className="pricing-navlink">
          <img
            alt="logo"
            src="/playground_assets/perfect%20resume-03-1500h.png"
            className="pricing-logo"
          />
        </Link>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="pricing-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="pricing-nav"
          >
            <Link to="/resume-templates" className="pricing-navlink1">
              Resume Templates
            </Link>
            <Link to="/c-v-templates" className="pricing-navlink2">
              CV Templates
            </Link>
            <Link to="/cover-letters" className="pricing-navlink3">
              Cover Letters
            </Link>
            <span className="pricing-text">Pricing</span>
          </nav>
          <div
            data-thq="thq-dropdown"
            className="pricing-thq-dropdown list-item"
          >
            <ul data-thq="thq-dropdown-list" className="pricing-dropdown-list">
              <li
                data-thq="thq-dropdown"
                className="pricing-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="pricing-dropdown-toggle"
                >
                  <span className="pricing-text001">All Articles</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="pricing-dropdown01 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="pricing-dropdown-toggle01"
                >
                  <span className="pricing-text002">Resume CV Writing</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="pricing-dropdown02 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="pricing-dropdown-toggle02"
                >
                  <span className="pricing-text003">Cover Letter Writing</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="pricing-dropdown03 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="pricing-dropdown-toggle03"
                >
                  <span className="pricing-text004">Examples</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="pricing-dropdown04 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="pricing-dropdown-toggle04"
                >
                  <span className="pricing-text005">Personal Development</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="pricing-dropdown05 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="pricing-dropdown-toggle05"
                >
                  <span className="pricing-text006">Inspiring Stories</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="pricing-dropdown06 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="pricing-dropdown-toggle06"
                >
                  <span className="pricing-text007">
                    Interviews &amp; Find Jobs
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div
            data-thq="thq-dropdown"
            className="pricing-thq-dropdown1 list-item"
          >
            <ul data-thq="thq-dropdown-list" className="pricing-dropdown-list1">
              <li
                data-thq="thq-dropdown"
                className="pricing-dropdown07 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="pricing-dropdown-toggle07"
                >
                  <span className="pricing-text008">EN US</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="pricing-dropdown08 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="pricing-dropdown-toggle08"
                >
                  <span className="pricing-text009">Dansk</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="pricing-dropdown09 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="pricing-dropdown-toggle09"
                >
                  <span className="pricing-text010">Deutsch</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="pricing-dropdown10 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="pricing-dropdown-toggle10"
                >
                  <span className="pricing-text011">English US</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="pricing-dropdown11 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="pricing-dropdown-toggle11"
                >
                  <span className="pricing-text012">English UK</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="pricing-dropdown12 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="pricing-dropdown-toggle12"
                >
                  <span className="pricing-text013">Espanol</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div data-thq="thq-navbar-btn-group" className="pricing-btn-group">
          <Link to="/register" className="pricing-register">
            Register
          </Link>
          <Link to="/login" className="pricing-login">
            Sign In
          </Link>
        </div>
        <div data-thq="thq-burger-menu" className="pricing-burger-menu">
          <svg viewBox="0 0 1024 1024" className="pricing-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="pricing-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="pricing-nav1"
          >
            <div className="pricing-container01">
              <img
                src="/playground_assets/perfect%20resume-03-1500h.png"
                className="pricing-image"
              />
              <div data-thq="thq-close-menu" className="pricing-menu-close">
                <svg viewBox="0 0 1024 1024" className="pricing-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="pricing-nav2"
            >
              <span className="pricing-text014">About</span>
              <span className="pricing-text015">Features</span>
              <span className="pricing-text016">Pricing</span>
              <span className="pricing-text017">Team</span>
            </nav>
            <div className="pricing-container02">
              <button className="pricing-register1 Content">Register</button>
              <button className="pricing-login1 Content">Sign In</button>
            </div>
          </div>
          <div className="pricing-icon-group">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="pricing-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="pricing-icon06"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="pricing-icon08"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="pricing-container03">
        <div className="pricing-container04">
          <h1 className="pricing-text018">Basic</h1>
          <img
            alt="image"
            src="/playground_assets/pricing-removebg-preview-1200w.png"
            className="pricing-image1"
          />
          <h1 className="pricing-text019">It&apos;s Free</h1>
          <button className="pricing-register2">Register Now</button>
        </div>
        <div className="pricing-container05">
          <h1 className="pricing-text020">One-page Resume</h1>
          <h1 className="pricing-text021">Predefined Layouts</h1>
          <h1 className="pricing-text022">One Resume</h1>
          <h1 className="pricing-text023">Cover Letter</h1>
        </div>
      </div>
      <div className="pricing-container06">
        <h1 className="pricing-text024">Premium</h1>
        <img
          alt="image"
          src="/playground_assets/pricing-removebg-preview-1200w.png"
          className="pricing-image2"
        />
        <div className="pricing-container07">
          <div className="pricing-container08">
            <h1 className="pricing-text025">No Automatic Renewal</h1>
            <h1 className="pricing-text026">14 Days Money Back Guarantee</h1>
          </div>
          <div className="pricing-container09">
            <div className="pricing-container10">
              <h1 className="pricing-text027">1 Month</h1>
              <h1 className="pricing-text028">$19.99</h1>
              <button className="pricing-register3">Upgrade Now</button>
            </div>
            <div className="pricing-container11">
              <h1 className="pricing-text029">3 Months</h1>
              <h1 className="pricing-text030">$39.99</h1>
              <button className="pricing-register4">Upgrade Now</button>
            </div>
            <div className="pricing-container12">
              <h1 className="pricing-text031">12 Months</h1>
              <h1 className="pricing-text032">$99.99</h1>
              <button className="pricing-register5">Upgrade Now</button>
            </div>
          </div>
          <div className="pricing-container13">
            <div className="pricing-container14">
              <h1 className="pricing-text033">Up to 10 pages per Resumes/CV</h1>
              <h1 className="pricing-text034">Custom Layout</h1>
              <h1 className="pricing-text035">Create multiple versions</h1>
              <h1 className="pricing-text036">Up to 44 more color themes</h1>
              <h1 className="pricing-text037">Specialized Sections</h1>
              <h1 className="pricing-text038">Creative Backgrounds</h1>
              <h1 className="pricing-text039">
                Icons for Interests &amp; Causes
              </h1>
            </div>
            <div className="pricing-container15">
              <h1 className="pricing-text040">Cover Letter</h1>
              <h1 className="pricing-text041">8 Premium Templates</h1>
              <h1 className="pricing-text042">9 extra fonts</h1>
              <h1 className="pricing-text043">Creative rating styles</h1>
              <h1 className="pricing-text044">Professional video tutorials</h1>
              <h1 className="pricing-text045">4 Extra Picture Styles</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing-container16">
        <h1 className="pricing-text046">Personal Stories</h1>
        <div className="pricing-container17">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1669618138590-e07ce06d3522?ixid=Mnw5MTMyMXwwfDF8YWxsfDc3fHx8fHx8Mnx8MTY2OTcyNjczMg&amp;ixlib=rb-4.0.3&amp;w=200"
            className="pricing-image3"
          />
        </div>
        <div className="pricing-container18">
          <div className="pricing-container19">
            <h1 className="pricing-text047">Brandon Klein</h1>
            <span className="pricing-text048">
              Senior Product Marketing Manager at Badu Networks
            </span>
            <span className="pricing-text049">
              “Absolutely love Perfect Resume! The layouts are phenomenal and
              enhancement hints that the tool provides you with is like having
              your own personal resume consultant! So much better than spending
              hours creating my own design files. Even better, the $16 you pay
              for the month doesn&apos;t auto-renew! Seems like a company that
              really wants to provide you with value instead of just take your
              money.”
            </span>
          </div>
        </div>
      </div>
      <div className="pricing-blog">
        <div className="pricing-container20">
          <h1 className="pricing-text050">
            Smart Resume Users Love Our Resume Builder.
          </h1>
          <div className="pricing-line3"></div>
        </div>
        <div className="pricing-listing">
          <div className="pricing-component-content-blog-example">
            <div className="pricing-container21">
              <div className="pricing-container22">
                <h1 className="pricing-text051">Good excited</h1>
                <span className="pricing-text052">Good excited</span>
                <span className="pricing-text053">Hamza Bhatti, August 14</span>
              </div>
              <div className="pricing-container23">
                <h1 className="pricing-text054">Wonderful</h1>
                <span className="pricing-text055">
                  Wonderful. Get a career build guide. Passed 10 interviews
                  passed and hired
                </span>
                <span className="pricing-text056">
                  Olha Nesterenko, August 5
                </span>
              </div>
              <div className="pricing-container24">
                <h1 className="pricing-text057">Excellent</h1>
                <span className="pricing-text058">Excellent</span>
                <span className="pricing-text059">Ved Verma Avi, July 8</span>
              </div>
            </div>
          </div>
          <span className="pricing-text060">
            Showing our 4 &amp; 5 star reviews
          </span>
        </div>
      </div>
      <div className="pricing-container25">
        <h1 className="pricing-text061">Frequently asked questions</h1>
        <div className="pricing-container26">
          <div className="pricing-container27">
            <h1 className="pricing-text062">
              Will my Premium account renew automatically?
            </h1>
            <span className="pricing-text063">
              No, our pricing model is not subscription based. Therefore, you
              will not be charged automatically without your consent.
            </span>
          </div>
          <div className="pricing-container28">
            <h1 className="pricing-text064">
              Will my information be saved after the Premium period expires?
            </h1>
            <span className="pricing-text065">
              <span>
                All the information will be saved in your account, even when the
                Premium period expires.
              </span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="pricing-container29">
          <div className="pricing-container30">
            <h1 className="pricing-text068">Are there any hidden costs?</h1>
            <span className="pricing-text069">
              There are no hidden costs. After selecting the period, the total
              price that you will be charged can be seen before introducing any
              payment details. (This excludes the charges required by the bank
              transfer.)
            </span>
          </div>
          <div className="pricing-container31">
            <h1 className="pricing-text070">
              Is my payment information secure?
            </h1>
            <span className="pricing-text071">
              <span>
                All transactions are 100% secure, with the option to pay through
                stripe.com and paypal.com, both having the highest levels of
                security measures that are available.
              </span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="pricing-container32">
          <div className="pricing-container33">
            <h1 className="pricing-text074">Can I try before I buy?</h1>
            <span className="pricing-text075">
              All transactions are 100% secure, with the option to pay through
              stripe.com and paypal.com, both having the highest levels of
              security measures that are available.
            </span>
          </div>
          <div className="pricing-container34">
            <h1 className="pricing-text076">
              What format will the documents be saved as?
            </h1>
            <span className="pricing-text077">
              <span>
                For increased security, readability and overall visual aspect,
                all the documents are saved as PDFs - which is a format that
                looks the same on all devices.
              </span>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </span>
          </div>
        </div>
      </div>
      <div className="pricing-social-bar">
        <svg viewBox="0 0 950.8571428571428 1024" className="pricing-icon10">
          <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
        </svg>
        <svg viewBox="0 0 877.7142857142857 1024" className="pricing-icon12">
          <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
        </svg>
        <svg viewBox="0 0 602.2582857142856 1024" className="pricing-icon14">
          <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
        </svg>
        <svg viewBox="0 0 877.7142857142857 1024" className="pricing-icon16">
          <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="pricing-icon18">
          <path d="M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z"></path>
        </svg>
      </div>
      <footer className="pricing-footer">
        <div className="pricing-links-container">
          <div className="pricing-container35">
            <div className="pricing-container36">
              <span className="pricing-text084">Perfect Resume</span>
              <span className="pricing-text085">Homepage</span>
              <span className="pricing-text086">Resume Templates</span>
              <span className="pricing-text087">CV Templates</span>
              <span className="pricing-text088">Cover Letters</span>
            </div>
            <div className="pricing-container37">
              <span className="pricing-text089">Learn</span>
              <span className="pricing-text090">Career Blog</span>
              <span className="pricing-text091">How to Write a Resume</span>
              <span className="pricing-text092">How to Write CV</span>
              <span className="pricing-text093">
                How to Write a Cover Letter
              </span>
              <span className="pricing-text094">Resume Examples</span>
              <span className="pricing-text095">Cover Letter Examples</span>
            </div>
          </div>
          <div className="pricing-container38">
            <div className="pricing-container39">
              <span className="pricing-text096">Other</span>
              <span className="pricing-text097">Pricing</span>
              <span className="pricing-text098">About Us</span>
              <span className="pricing-text099">
                E-book: How to get a job in 2022
              </span>
              <span className="pricing-text100">Media Kit</span>
              <span className="pricing-text101">Help Center</span>
            </div>
            <div className="pricing-container40">
              <span className="pricing-text102">Resources</span>
              <span className="pricing-text103">Terms of Use</span>
              <span className="pricing-text104">Privacy Policy</span>
              <span className="pricing-text105">Cookie Policy</span>
              <span className="pricing-text106">contact@perfectresume.com</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Pricing
