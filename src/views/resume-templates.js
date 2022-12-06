import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import TestimonialCard3 from '../components/testimonial-card3'
import './resume-templates.css'

const ResumeTemplates = (props) => {
  return (
    <div className="resume-templates-container">
      <Helmet>
        <title>Resume-Templates - Perfect Resume</title>
        <meta property="og:title" content="Resume-Templates - Perfect Resume" />
      </Helmet>
      <header
        data-thq="thq-navbar"
        className="resume-templates-navbar-interactive"
      >
        <Link to="/" className="resume-templates-navlink">
          <img
            alt="logo"
            src="/playground_assets/perfect%20resume-03-1500h.png"
            className="resume-templates-logo"
          />
        </Link>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="resume-templates-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="resume-templates-nav"
          >
            <span className="resume-templates-text">Resume Templates</span>
            <Link to="/c-v-templates" className="resume-templates-navlink1">
              CV Templates
            </Link>
            <Link to="/cover-letters" className="resume-templates-navlink2">
              Cover Letters
            </Link>
            <Link to="/pricing" className="resume-templates-navlink3">
              Pricing
            </Link>
          </nav>
          <div
            data-thq="thq-dropdown"
            className="resume-templates-thq-dropdown list-item"
          >
            <ul
              data-thq="thq-dropdown-list"
              className="resume-templates-dropdown-list"
            >
              <li
                data-thq="thq-dropdown"
                className="resume-templates-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="resume-templates-dropdown-toggle"
                >
                  <span className="resume-templates-text001">All Articles</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="resume-templates-dropdown01 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="resume-templates-dropdown-toggle01"
                >
                  <span className="resume-templates-text002">
                    Resume CV Writing
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="resume-templates-dropdown02 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="resume-templates-dropdown-toggle02"
                >
                  <span className="resume-templates-text003">
                    Cover Letter Writing
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="resume-templates-dropdown03 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="resume-templates-dropdown-toggle03"
                >
                  <span className="resume-templates-text004">Examples</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="resume-templates-dropdown04 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="resume-templates-dropdown-toggle04"
                >
                  <span className="resume-templates-text005">
                    Personal Development
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="resume-templates-dropdown05 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="resume-templates-dropdown-toggle05"
                >
                  <span className="resume-templates-text006">
                    Inspiring Stories
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="resume-templates-dropdown06 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="resume-templates-dropdown-toggle06"
                >
                  <span className="resume-templates-text007">
                    Interviews &amp; Find Jobs
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div
            data-thq="thq-dropdown"
            className="resume-templates-thq-dropdown1 list-item"
          >
            <ul
              data-thq="thq-dropdown-list"
              className="resume-templates-dropdown-list1"
            >
              <li
                data-thq="thq-dropdown"
                className="resume-templates-dropdown07 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="resume-templates-dropdown-toggle07"
                >
                  <span className="resume-templates-text008">EN US</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="resume-templates-dropdown08 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="resume-templates-dropdown-toggle08"
                >
                  <span className="resume-templates-text009">Dansk</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="resume-templates-dropdown09 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="resume-templates-dropdown-toggle09"
                >
                  <span className="resume-templates-text010">Deutsch</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="resume-templates-dropdown10 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="resume-templates-dropdown-toggle10"
                >
                  <span className="resume-templates-text011">English US</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="resume-templates-dropdown11 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="resume-templates-dropdown-toggle11"
                >
                  <span className="resume-templates-text012">English UK</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="resume-templates-dropdown12 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="resume-templates-dropdown-toggle12"
                >
                  <span className="resume-templates-text013">Espanol</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div
          data-thq="thq-navbar-btn-group"
          className="resume-templates-btn-group"
        >
          <Link to="/register" className="resume-templates-register">
            Register
          </Link>
          <Link to="/login" className="resume-templates-login">
            Sign In
          </Link>
        </div>
        <div
          data-thq="thq-burger-menu"
          className="resume-templates-burger-menu"
        >
          <svg viewBox="0 0 1024 1024" className="resume-templates-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div
          data-thq="thq-mobile-menu"
          className="resume-templates-mobile-menu"
        >
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="resume-templates-nav1"
          >
            <div className="resume-templates-container01">
              <img
                src="/playground_assets/perfect%20resume-03-1500h.png"
                className="resume-templates-image"
              />
              <div
                data-thq="thq-close-menu"
                className="resume-templates-menu-close"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="resume-templates-icon02"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="resume-templates-nav2"
            >
              <Link to="/resume-templates" className="resume-templates-text014">
                Resumes Templates
              </Link>
              <Link to="/c-v-templates" className="resume-templates-navlink4">
                CV Templates
              </Link>
              <Link to="/cover-letters" className="resume-templates-navlink5">
                Cover Letters
              </Link>
              <Link to="/pricing" className="resume-templates-navlink6">
                Pricing
              </Link>
            </nav>
            <div className="resume-templates-container02">
              <Link
                to="/register"
                className="resume-templates-register1 Content"
              >
                Register
              </Link>
              <Link to="/login" className="resume-templates-login1 Content">
                Sign In
              </Link>
            </div>
          </div>
          <div className="resume-templates-icon-group">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="resume-templates-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="resume-templates-icon06"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="resume-templates-icon08"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="resume-templates-container03">
        <div className="resume-templates-container04"></div>
        <h2 className="resume-templates-text015">Resume Templates</h2>
        <h2 className="resume-templates-text016">
          / 0 - 5 years of experience
        </h2>
        <div className="resume-templates-line3"></div>
        <div className="resume-templates-container05">
          <div className="resume-templates-container06">
            <div className="resume-templates-container07">
              <div className="resume-templates-container08">
                <span className="resume-templates-text017">Resumes</span>
                <span className="resume-templates-text018">
                  Student/Intermediate
                </span>
              </div>
              <div className="resume-templates-container09">
                <span className="resume-templates-text019">CVs</span>
                <span className="resume-templates-text020">Senior</span>
              </div>
              <div className="resume-templates-container10">
                <span className="resume-templates-text021">Cover Letters</span>
                <span className="resume-templates-text022">
                  All levels of experience
                </span>
              </div>
            </div>
            <div className="resume-templates-container11">
              <div className="resume-templates-container12">
                <h1 className="resume-templates-text023">
                  Pick from 8+ [Free] Resume templats
                </h1>
                <span className="resume-templates-text024">
                  Our CV templates are designed with your success in mind.
                  They&apos;re all free (with premium features), ATS-friendly,
                  and easy-to-read!
                </span>
              </div>
              <div className="resume-templates-container13">
                <img
                  alt="image"
                  src="/playground_assets/resume_templateer-removebg-preview-400w.png"
                  className="resume-templates-image01"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="resume-templates-container14">
          <div className="resume-templates-container15">
            <img
              alt="image"
              src="/playground_assets/cv%20template-500h.png"
              className="resume-templates-image02"
            />
            <div className="resume-templates-container16">
              <span className="resume-templates-text025">Minimalist</span>
              <span className="resume-templates-text026 Content">
                A simple and easy to follow resume template. Perfect for more
                conservative industries which prefer less flashy templates.
              </span>
            </div>
          </div>
          <div className="resume-templates-container17">
            <img
              alt="image"
              src="/playground_assets/resume%20template-500h.png"
              className="resume-templates-image03"
            />
            <div className="resume-templates-container18">
              <span className="resume-templates-text027">Traditional</span>
              <span className="resume-templates-text028 Content">
                A straightforward format that gives equal importance to all
                resume sections, emphasising skills and work experience.
              </span>
            </div>
          </div>
          <div className="resume-templates-container19">
            <img
              alt="image"
              src="/playground_assets/resume%20template-500h.png"
              className="resume-templates-image04"
            />
            <div className="resume-templates-container20">
              <span className="resume-templates-text029">Creative</span>
              <span className="resume-templates-text030 Content">
                Land your dream job in the creative industries by using this
                creative resume template, which will make your application stand
                out.
              </span>
            </div>
          </div>
          <div className="resume-templates-container21">
            <img
              alt="image"
              src="/playground_assets/cv%20template-500h.png"
              className="resume-templates-image05"
            />
            <div className="resume-templates-container22">
              <span className="resume-templates-text031">Modern</span>
              <span className="resume-templates-text032 Content">
                It can be hard to stand out from the crowd, but this modern
                resume sample will take care of this.
              </span>
            </div>
          </div>
        </div>
        <div className="resume-templates-container23">
          <div className="resume-templates-container24">
            <img
              alt="image"
              src="/playground_assets/cv%20template-500h.png"
              className="resume-templates-image06"
            />
            <div className="resume-templates-container25">
              <span className="resume-templates-text033">Minimalist</span>
              <span className="resume-templates-text034 Content">
                A simple and easy to follow resume template. Perfect for more
                conservative industries which prefer less flashy templates.
              </span>
            </div>
          </div>
          <div className="resume-templates-container26">
            <img
              alt="image"
              src="/playground_assets/resume%20template-500h.png"
              className="resume-templates-image07"
            />
            <div className="resume-templates-container27">
              <span className="resume-templates-text035">Traditional</span>
              <span className="resume-templates-text036 Content">
                A straightforward format that gives equal importance to all
                resume sections, emphasising skills and work experience.
              </span>
            </div>
          </div>
          <div className="resume-templates-container28">
            <img
              alt="image"
              src="/playground_assets/resume%20template-500h.png"
              className="resume-templates-image08"
            />
            <div className="resume-templates-container29">
              <span className="resume-templates-text037">Creative</span>
              <span className="resume-templates-text038 Content">
                Land your dream job in the creative industries by using this
                creative resume template, which will make your application stand
                out.
              </span>
            </div>
          </div>
          <div className="resume-templates-container30">
            <img
              alt="image"
              src="/playground_assets/cv%20template-500h.png"
              className="resume-templates-image09"
            />
            <div className="resume-templates-container31">
              <span className="resume-templates-text039">Modern</span>
              <span className="resume-templates-text040 Content">
                It can be hard to stand out from the crowd, but this modern
                resume sample will take care of this.
              </span>
            </div>
          </div>
        </div>
        <div className="resume-templates-container32">
          <div className="resume-templates-container33">
            <img
              alt="image"
              src="/playground_assets/cv%20template-500h.png"
              className="resume-templates-image10"
            />
            <div className="resume-templates-container34">
              <span className="resume-templates-text041">Minimalist</span>
              <span className="resume-templates-text042 Content">
                A simple and easy to follow resume template. Perfect for more
                conservative industries which prefer less flashy templates.
              </span>
            </div>
          </div>
          <div className="resume-templates-container35">
            <img
              alt="image"
              src="/playground_assets/resume%20template-500h.png"
              className="resume-templates-image11"
            />
            <div className="resume-templates-container36">
              <span className="resume-templates-text043">Traditional</span>
              <span className="resume-templates-text044 Content">
                A straightforward format that gives equal importance to all
                resume sections, emphasising skills and work experience.
              </span>
            </div>
          </div>
          <div className="resume-templates-container37">
            <img
              alt="image"
              src="/playground_assets/resume%20template-500h.png"
              className="resume-templates-image12"
            />
            <div className="resume-templates-container38">
              <span className="resume-templates-text045">Creative</span>
              <span className="resume-templates-text046 Content">
                Land your dream job in the creative industries by using this
                creative resume template, which will make your application stand
                out.
              </span>
            </div>
          </div>
          <div className="resume-templates-container39">
            <img
              alt="image"
              src="/playground_assets/cv%20template-500h.png"
              className="resume-templates-image13"
            />
            <div className="resume-templates-container40">
              <span className="resume-templates-text047">Modern</span>
              <span className="resume-templates-text048 Content">
                It can be hard to stand out from the crowd, but this modern
                resume sample will take care of this.
              </span>
            </div>
          </div>
        </div>
        <div className="resume-templates-container41">
          <div className="resume-templates-container42">
            <img
              alt="image"
              src="/playground_assets/cv%20template-500h.png"
              className="resume-templates-image14"
            />
            <div className="resume-templates-container43">
              <span className="resume-templates-text049">Minimalist</span>
              <span className="resume-templates-text050 Content">
                A simple and easy to follow resume template. Perfect for more
                conservative industries which prefer less flashy templates.
              </span>
            </div>
          </div>
          <div className="resume-templates-container44">
            <img
              alt="image"
              src="/playground_assets/resume%20template-500h.png"
              className="resume-templates-image15"
            />
            <div className="resume-templates-container45">
              <span className="resume-templates-text051">Traditional</span>
              <span className="resume-templates-text052 Content">
                A straightforward format that gives equal importance to all
                resume sections, emphasising skills and work experience.
              </span>
            </div>
          </div>
          <div className="resume-templates-container46">
            <img
              alt="image"
              src="/playground_assets/resume%20template-500h.png"
              className="resume-templates-image16"
            />
            <div className="resume-templates-container47">
              <span className="resume-templates-text053">Creative</span>
              <span className="resume-templates-text054 Content">
                Land your dream job in the creative industries by using this
                creative resume template, which will make your application stand
                out.
              </span>
            </div>
          </div>
          <div className="resume-templates-container48">
            <img
              alt="image"
              src="/playground_assets/cv%20template-500h.png"
              className="resume-templates-image17"
            />
            <div className="resume-templates-container49">
              <span className="resume-templates-text055">Modern</span>
              <span className="resume-templates-text056 Content">
                It can be hard to stand out from the crowd, but this modern
                resume sample will take care of this.
              </span>
            </div>
          </div>
        </div>
        <div className="resume-templates-blog">
          <h1 className="resume-templates-text057">Why Perfect Resume?</h1>
          <div className="resume-templates-line31"></div>
          <div className="resume-templates-listing">
            <div className="resume-templates-component-content-blog-example">
              <div className="resume-templates-container50">
                <img
                  alt="image"
                  src="/playground_assets/ecommerce__554_-removebg-preview-200h.png"
                  className="resume-templates-image18"
                />
                <div className="resume-templates-container51">
                  <h1 className="resume-templates-text058">Free AND Premium</h1>
                  <span className="resume-templates-text059">
                    We offer both free and premium features. Want your resume to
                    have that extra punch? Upgrade to Premium. On a budget?
                    That&apos;s OK too - you can use our resume buider
                    completely free of charge.
                  </span>
                </div>
              </div>
              <div className="resume-templates-container52">
                <img
                  alt="image"
                  src="/playground_assets/men-removebg-preview-200h.png"
                  className="resume-templates-image19"
                />
                <div className="resume-templates-container53">
                  <h1 className="resume-templates-text060">
                    Creative and Professional Resume Templates
                  </h1>
                  <span className="resume-templates-text061">
                    Whatever resume template you&apos;re looking for, we&apos;ve
                    got it! Whether it&apos;s a classic black-and-white
                    template, or something a bit more outside the box, we have
                    what you need!
                  </span>
                </div>
              </div>
            </div>
            <div className="resume-templates-component-content-blog-example1">
              <div className="resume-templates-container54">
                <img
                  alt="image"
                  src="/playground_assets/men-removebg-preview-200h.png"
                  className="resume-templates-image20"
                />
                <div className="resume-templates-container55">
                  <h1 className="resume-templates-text062">NO Hidden Fees</h1>
                  <span className="resume-templates-text063">
                    With Perfect Resume, you won’t spend hours working on your
                    resume, just to be hit with a hidden paywall. Our resume
                    builder will notify you if you’re using any of our premium
                    features in advance.
                  </span>
                </div>
              </div>
              <div className="resume-templates-container56">
                <img
                  alt="image"
                  src="/playground_assets/ecommerce__554_-removebg-preview-200h.png"
                  className="resume-templates-image21"
                />
                <div className="resume-templates-container57">
                  <h1 className="resume-templates-text064">ATS-Friendly</h1>
                  <span className="resume-templates-text065">
                    Our resume templates are ATS-friendly. It means your resume
                    won’t automatically be rejected because an ATS can’t read
                    it.
                  </span>
                </div>
              </div>
            </div>
            <div className="resume-templates-component-content-blog-example2">
              <div className="resume-templates-container58">
                <img
                  alt="image"
                  src="/playground_assets/ecommerce__554_-removebg-preview-200h.png"
                  className="resume-templates-image22"
                />
                <div className="resume-templates-container59">
                  <h1 className="resume-templates-text066">
                    Live Content Feedback
                  </h1>
                  <span className="resume-templates-text067">
                    Our CV builder provides real-time feedback on your resume
                    content, ensuring that your resume reaches its full
                    potential!
                  </span>
                </div>
              </div>
              <div className="resume-templates-container60">
                <img
                  alt="image"
                  src="/playground_assets/men-removebg-preview-200h.png"
                  className="resume-templates-image23"
                />
                <div className="resume-templates-container61">
                  <h1 className="resume-templates-text068">
                    Edit Your Resume in Real Time
                  </h1>
                  <span className="resume-templates-text069">
                    As you edit your resume with our builder, you’ll immediately
                    see the changes applied to your document.
                  </span>
                </div>
              </div>
            </div>
            <button className="resume-templates-register2">
              Try it Out Yourself
            </button>
          </div>
        </div>
        <div className="resume-templates-testimonial">
          <h1 className="resume-templates-text070">Expert Reviews</h1>
          <div className="resume-templates-line32"></div>
          <div className="resume-templates-container62">
            <TestimonialCard3
              picture_src="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxtYW58ZW58MHx8fHwxNjI2NDUyMDM1&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName"
            ></TestimonialCard3>
            <TestimonialCard3
              picture_src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxtYW58ZW58MHx8fHwxNjI2NDUyMDM1&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName"
            ></TestimonialCard3>
            <TestimonialCard3
              picture_src="https://images.unsplash.com/photo-1546456073-ea246a7bd25f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fGJsYWNrJTIwbWFufGVufDB8fHx8MTYyNjQ1MjAwOA&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName"
            ></TestimonialCard3>
          </div>
        </div>
      </div>
      <div className="resume-templates-container63">
        <div className="resume-templates-container64">
          <h1 className="resume-templates-text071">Resume Resources</h1>
          <div className="resume-templates-line33"></div>
        </div>
        <div className="resume-templates-banner">
          <img
            alt="image"
            src="/playground_assets/it_10_generated-removebg-preview-1100w.png"
            loading="lazy"
            className="resume-templates-image24"
          />
          <div className="resume-templates-container65">
            <h1 className="resume-templates-text072">
              Why should I use a resume builder?
            </h1>
            <span className="resume-templates-text073">
              Using a resume builder makes the process of creating a resume
              significantly faster and easier. Ever tried building your resume
              with Word?
            </span>
            <span className="resume-templates-text074">
              The whole process is a huge pain – you make a TINY change to your
              resume, and the entire resume layout gets completely messed up.
            </span>
            <span className="resume-templates-text075">
              With a resume builder, you don’t have to worry about the nitty
              gritty of resume creation, like font selection, layout,
              formatting, etc.
            </span>
            <span className="resume-templates-text076">
              All you have to do is pick a resume template, fill it in, and then
              you’re ready to start applying for jobs!
            </span>
          </div>
        </div>
        <div className="resume-templates-banner1">
          <div className="resume-templates-container66">
            <h1 className="resume-templates-text077">
              What is the best resume builder?
            </h1>
            <span className="resume-templates-text078">
              Over the past 7 years, we’ve been working hard to make Perfect
              Resume the best resume builder out there.
            </span>
            <span className="resume-templates-text079">
              And we’d say we succeeded! Here’s what sets us apart from the rest
              of the competition:
            </span>
            <span className="resume-templates-text080">
              Easy to Use - Our builder is very easy to use, even if you&apos;re
              not too tech-friendly.
            </span>
            <span className="resume-templates-text081">
              Get Started in under 5 Minutes - Just pick one of our resume
              templates, and you&apos;re good to go!
            </span>
            <span className="resume-templates-text082">
              It&apos;s 100% free - Some resume builders out there pretend to be
              free… and then they hit you with a paywall once you’re done
              writing your resume! We don’t do that. Our builder will instantly
              notify you if you’re using any of our premium features.
            </span>
            <span className="resume-templates-text083">
              Cover Letter Builder - If you’re using Perfect Resume Premium, you
              gain access to our cover letter builder for free (including
              matching cover letter templates).
            </span>
            <span className="resume-templates-text084">
              Tons of Customization and Design Options - Our builder offers a
              ton of customization. You can make changes to the layout, color
              schemes, and much more.
            </span>
            <span className="resume-templates-text085">
              ATS-Friendly Resume Templates - Our resume templates are built on
              top of some of the most popular applicant tracking systems out
              there. Meaning, your resume won&apos;t automatically get rejected
              by any ATS.
            </span>
          </div>
          <img
            alt="image"
            src="/playground_assets/it_10_generated-removebg-preview-1100w.png"
            loading="lazy"
            className="resume-templates-image25"
          />
        </div>
        <div className="resume-templates-banner2">
          <img
            alt="image"
            src="/playground_assets/it_10_generated-removebg-preview-1100w.png"
            loading="lazy"
            className="resume-templates-image26"
          />
          <div className="resume-templates-container67">
            <h1 className="resume-templates-text086">
              Is this a completely free resume builder?
            </h1>
            <span className="resume-templates-text087">
              Yes, Perfect Resume is a 100% free resume builder.
            </span>
            <span className="resume-templates-text088">
              If you’re on a budget, you can use it to create your resume
              completely free of charge. And no, unlike some other resume
              builders out there, we don’t hit you with a paywall once you’ve
              completed your resume.
            </span>
            <span className="resume-templates-text089">
              If you use any of our premium features, the software will let you
              know about it. It will then ask if you did it accidentally, or if
              you would like to upgrade to Novorésumé Premium. You&apos;re in
              control!
            </span>
          </div>
        </div>
        <div className="resume-templates-banner3">
          <div className="resume-templates-container68">
            <h1 className="resume-templates-text090">What is a resume?</h1>
            <span className="resume-templates-text091">
              A resume (also known as a CV, or curriculum vitae) is a 1-2 page
              document that summarizes your work experience and career history.
            </span>
            <span className="resume-templates-text092">
              It usually includes information about the following:
            </span>
            <span className="resume-templates-text093">Your work history</span>
            <span className="resume-templates-text094">
              Educational background
            </span>
            <span className="resume-templates-text095">Achievements</span>
            <span className="resume-templates-text096">
              Contact information
            </span>
            <span className="resume-templates-text097">
              Resume summary or resume objective
            </span>
          </div>
          <img
            alt="image"
            src="/playground_assets/it_10_generated-removebg-preview-1100w.png"
            loading="lazy"
            className="resume-templates-image27"
          />
        </div>
        <div className="resume-templates-banner4">
          <img
            alt="image"
            src="/playground_assets/it_10_generated-removebg-preview-1100w.png"
            loading="lazy"
            className="resume-templates-image28"
          />
          <div className="resume-templates-container69">
            <h1 className="resume-templates-text098">
              What&apos;s the difference between a CV and a resume?
            </h1>
            <span className="resume-templates-text099">
              In the EU, the words &quot;CV&quot; and &quot;resume&quot; are
              used interchangeably
            </span>
            <span className="resume-templates-text100">
              In the United States, however, a resume is a document you use to
              apply for jobs, while a CV is mainly used by academics.
            </span>
            <span className="resume-templates-text101">
              Want to learn more? Check out our article on the differences
              between CVs and resumes.
            </span>
          </div>
        </div>
        <div className="resume-templates-banner5">
          <div className="resume-templates-container70">
            <h1 className="resume-templates-text102">
              How can I create my resume?
            </h1>
            <span className="resume-templates-text103">
              Making a resume with Perfect Resume is very straightforward.
            </span>
            <span className="resume-templates-text104">
              Just pick one of our professional resume templates.
            </span>
            <span className="resume-templates-text105">
              Then, you’ll be forwarded to our resume builder, where all you
              have to do is fill in your resume content!
            </span>
          </div>
          <img
            alt="image"
            src="/playground_assets/it_10_generated-removebg-preview-1100w.png"
            loading="lazy"
            className="resume-templates-image29"
          />
        </div>
        <div className="resume-templates-banner6">
          <img
            alt="image"
            src="/playground_assets/it_10_generated-removebg-preview-1100w.png"
            loading="lazy"
            className="resume-templates-image30"
          />
          <div className="resume-templates-container71">
            <h1 className="resume-templates-text106">
              What should a resume include?
            </h1>
            <span className="resume-templates-text107">
              The must-have contents in your resume include the following
              sections:
            </span>
            <span className="resume-templates-text108">Work Experience</span>
            <span className="resume-templates-text109">
              Educational Background
            </span>
            <span className="resume-templates-text110">
              Contact Information
            </span>
            <span className="resume-templates-text111">
              Resume summary or Resume Objective
            </span>
            <span className="resume-templates-text112">
              The optional ones are:
            </span>
            <span className="resume-templates-text113">
              Hobbies &amp; Interests
            </span>
            <span className="resume-templates-text114">Skills</span>
            <span className="resume-templates-text115">
              Volunteering Experience
            </span>
          </div>
        </div>
      </div>
      <div className="resume-templates-container72">
        <div className="resume-templates-container73"></div>
        <h2 className="resume-templates-text116">
          Get Inspired with Our Resume Examples
        </h2>
        <div className="resume-templates-line34"></div>
        <div className="resume-templates-container74">
          <div className="resume-templates-container75">
            <img
              alt="image"
              src="/playground_assets/cv%20template-500h.png"
              className="resume-templates-image31"
            />
            <div className="resume-templates-container76">
              <span className="resume-templates-text117">
                Data Entry Specialist
              </span>
              <span className="resume-templates-text118 Content">
                A resume template as creative as your imagination
              </span>
            </div>
          </div>
          <div className="resume-templates-container77">
            <img
              alt="image"
              src="/playground_assets/resume%20template-500h.png"
              className="resume-templates-image32"
            />
            <div className="resume-templates-container78">
              <span className="resume-templates-text119">Graphic Designer</span>
              <span className="resume-templates-text120 Content">
                A resume template as creative as your imagination
              </span>
            </div>
          </div>
          <div className="resume-templates-container79">
            <img
              alt="image"
              src="/playground_assets/cv%20template-500h.png"
              className="resume-templates-image33"
            />
            <div className="resume-templates-container80">
              <span className="resume-templates-text121">
                Bookkeeper &amp; Accounting
              </span>
              <span className="resume-templates-text122 Content">
                A resume template as creative as your imagination
              </span>
            </div>
          </div>
        </div>
        <button className="resume-templates-register3">
          Browse More Examples
        </button>
      </div>
      <div className="resume-templates-container81">
        <h2 className="resume-templates-text123">Resume Templates FAQ?</h2>
        <div className="resume-templates-line35"></div>
        <div className="resume-templates-container82">
          <div className="resume-templates-container83">
            <div className="resume-templates-container84">
              <h1 className="resume-templates-text124">
                How to Make a Resume with Perfect Resume?
              </h1>
              <span className="resume-templates-text125">
                <span className="resume-templates-text126">
                  Follow these simple steps:
                </span>
                <br></br>
                <br></br>
                <span>Choose one of our top resume templates above</span>
                <br></br>
                <br></br>
                <span>
                  Follow the tips &amp; tricks built-in our resume builder
                </span>
                <br></br>
                <br></br>
                <span>Fill in your work history and other experiences</span>
                <br></br>
                <br></br>
                <span>Hit download and start applying to jobs!</span>
              </span>
            </div>
            <div className="resume-templates-container85">
              <h1 className="resume-templates-text139">
                Are These Resume Templates Free?
              </h1>
              <span className="resume-templates-text140">
                <span>
                  Yep, all of the templates listed above are free resume
                  templates.
                </span>
                <br></br>
                <br></br>
                <span>
                  However, our resume builder comes with a ton of premium
                  features. So if you want to personalize your resume and make
                  it truly yours, you can upgrade!
                </span>
              </span>
            </div>
            <div className="resume-templates-container86">
              <h1 className="resume-templates-text145">
                Are These Resume Templates ATS-Friendly?
              </h1>
              <span className="resume-templates-text146">
                <span>
                  Yes! All Perfect Resume resume templates are created with
                  applicant tracking systems in mind.
                </span>
                <br></br>
                <br></br>
                <span>
                  Keep in mind, though, that using the right template is step
                  #1. You should also optimize your resume content for applicant
                  tracking systems. For more on that, check out our guide to
                  creating an ATS-friendly resume.
                </span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
        <div className="resume-templates-container87">
          <div className="resume-templates-container88">
            <h1 className="resume-templates-text152">
              What If I Am a Student?
            </h1>
            <span className="resume-templates-text153">
              <span>
                All of our resume samples are student-friendly! If you’re
                looking for something a bit more tailored, we’d recommend
                picking the “college resume template”
              </span>
              <br className="resume-templates-text155"></br>
              <br className="resume-templates-text156"></br>
              <span>
                Or, if you want to learn how to create a convincing student
                resume, check out our guide.
              </span>
            </span>
          </div>
          <div className="resume-templates-container89">
            <h1 className="resume-templates-text158">
              Who Created These Resume Samples?
            </h1>
            <span className="resume-templates-text159">
              <span>
                At Perfect Resume , we put extensive care in creating each
                resume template.
              </span>
              <br></br>
              <br></br>
              <span>
                We interviewed recruiters and analyzed applicant tracking
                systems to create resume samples that will maximize your chances
                of getting hired.
              </span>
              <br></br>
              <br></br>
              <span>
                Then, our professional graphic designer worked his magic to make
                the resume samples compelling, well-designed, and easy to read!
              </span>
            </span>
          </div>
          <div className="resume-templates-container90">
            <h1 className="resume-templates-text167">
              Do You Offer One-Page Resume Templates?
            </h1>
            <span className="resume-templates-text168">
              <span>
                Yep. All the templates you see above are one-page resume
                templates. They are, however, pretty flexible, so if you decide
                to go for 2 pages, our templates will get the job done!
              </span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
      <div className="resume-templates-social-bar">
        <svg
          viewBox="0 0 950.8571428571428 1024"
          className="resume-templates-icon10"
        >
          <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
        </svg>
        <svg
          viewBox="0 0 877.7142857142857 1024"
          className="resume-templates-icon12"
        >
          <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
        </svg>
        <svg
          viewBox="0 0 602.2582857142856 1024"
          className="resume-templates-icon14"
        >
          <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
        </svg>
        <svg
          viewBox="0 0 877.7142857142857 1024"
          className="resume-templates-icon16"
        >
          <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="resume-templates-icon18">
          <path d="M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z"></path>
        </svg>
      </div>
      <footer className="resume-templates-footer">
        <div className="resume-templates-links-container">
          <div className="resume-templates-container91">
            <div className="resume-templates-container92">
              <span className="resume-templates-text171">Perfect Resume</span>
              <span className="resume-templates-text172">Homepage</span>
              <span className="resume-templates-text173">Resume Templates</span>
              <span className="resume-templates-text174">CV Templates</span>
              <span className="resume-templates-text175">Cover Letters</span>
            </div>
            <div className="resume-templates-container93">
              <span className="resume-templates-text176">Learn</span>
              <span className="resume-templates-text177">Career Blog</span>
              <span className="resume-templates-text178">
                How to Write a Resume
              </span>
              <span className="resume-templates-text179">How to Write CV</span>
              <span className="resume-templates-text180">
                How to Write a Cover Letter
              </span>
              <span className="resume-templates-text181">Resume Examples</span>
              <span className="resume-templates-text182">
                Cover Letter Examples
              </span>
            </div>
          </div>
          <div className="resume-templates-container94">
            <div className="resume-templates-container95">
              <span className="resume-templates-text183">Other</span>
              <span className="resume-templates-text184">Pricing</span>
              <span className="resume-templates-text185">About Us</span>
              <span className="resume-templates-text186">
                E-book: How to get a job in 2022
              </span>
              <span className="resume-templates-text187">Media Kit</span>
              <span className="resume-templates-text188">Help Center</span>
            </div>
            <div className="resume-templates-container96">
              <span className="resume-templates-text189">Resources</span>
              <span className="resume-templates-text190">Terms of Use</span>
              <span className="resume-templates-text191">Privacy Policy</span>
              <span className="resume-templates-text192">Cookie Policy</span>
              <span className="resume-templates-text193">
                contact@perfectresume.com
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ResumeTemplates
