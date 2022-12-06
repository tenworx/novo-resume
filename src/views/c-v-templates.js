import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import TestimonialCard3 from '../components/testimonial-card3'
import './c-v-templates.css'

const CVTemplates = (props) => {
  return (
    <div className="c-v-templates-container">
      <Helmet>
        <title>CV-Templates - Perfect Resume</title>
        <meta property="og:title" content="CV-Templates - Perfect Resume" />
      </Helmet>
      <header
        data-thq="thq-navbar"
        className="c-v-templates-navbar-interactive"
      >
        <Link to="/" className="c-v-templates-navlink">
          <img
            alt="logo"
            src="/playground_assets/perfect%20resume-03-1500h.png"
            className="c-v-templates-logo"
          />
        </Link>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="c-v-templates-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="c-v-templates-nav"
          >
            <Link to="/resume-templates" className="c-v-templates-navlink01">
              Resume Templates
            </Link>
            <Link to="/c-v-templates" className="c-v-templates-navlink02">
              CV Templates
            </Link>
            <Link to="/cover-letters" className="c-v-templates-navlink03">
              Cover Letters
            </Link>
            <Link to="/pricing" className="c-v-templates-navlink04">
              Pricing
            </Link>
          </nav>
          <div
            data-thq="thq-dropdown"
            className="c-v-templates-thq-dropdown list-item"
          >
            <ul
              data-thq="thq-dropdown-list"
              className="c-v-templates-dropdown-list"
            >
              <li
                data-thq="thq-dropdown"
                className="c-v-templates-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="c-v-templates-dropdown-toggle"
                >
                  <span className="c-v-templates-text">All Articles</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="c-v-templates-dropdown01 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="c-v-templates-dropdown-toggle01"
                >
                  <span className="c-v-templates-text001">
                    Resume CV Writing
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="c-v-templates-dropdown02 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="c-v-templates-dropdown-toggle02"
                >
                  <span className="c-v-templates-text002">
                    Cover Letter Writing
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="c-v-templates-dropdown03 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="c-v-templates-dropdown-toggle03"
                >
                  <span className="c-v-templates-text003">Examples</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="c-v-templates-dropdown04 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="c-v-templates-dropdown-toggle04"
                >
                  <span className="c-v-templates-text004">
                    Personal Development
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="c-v-templates-dropdown05 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="c-v-templates-dropdown-toggle05"
                >
                  <span className="c-v-templates-text005">
                    Inspiring Stories
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="c-v-templates-dropdown06 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="c-v-templates-dropdown-toggle06"
                >
                  <span className="c-v-templates-text006">
                    Interviews &amp; Find Jobs
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div
            data-thq="thq-dropdown"
            className="c-v-templates-thq-dropdown1 list-item"
          >
            <ul
              data-thq="thq-dropdown-list"
              className="c-v-templates-dropdown-list1"
            >
              <li
                data-thq="thq-dropdown"
                className="c-v-templates-dropdown07 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="c-v-templates-dropdown-toggle07"
                >
                  <span className="c-v-templates-text007">EN US</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="c-v-templates-dropdown08 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="c-v-templates-dropdown-toggle08"
                >
                  <span className="c-v-templates-text008">Dansk</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="c-v-templates-dropdown09 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="c-v-templates-dropdown-toggle09"
                >
                  <span className="c-v-templates-text009">Deutsch</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="c-v-templates-dropdown10 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="c-v-templates-dropdown-toggle10"
                >
                  <span className="c-v-templates-text010">English US</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="c-v-templates-dropdown11 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="c-v-templates-dropdown-toggle11"
                >
                  <span className="c-v-templates-text011">English UK</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="c-v-templates-dropdown12 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="c-v-templates-dropdown-toggle12"
                >
                  <span className="c-v-templates-text012">Espanol</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div
          data-thq="thq-navbar-btn-group"
          className="c-v-templates-btn-group"
        >
          <Link to="/register" className="c-v-templates-register">
            Register
          </Link>
          <Link to="/login" className="c-v-templates-login">
            Sign In
          </Link>
        </div>
        <div data-thq="thq-burger-menu" className="c-v-templates-burger-menu">
          <svg viewBox="0 0 1024 1024" className="c-v-templates-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="c-v-templates-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="c-v-templates-nav1"
          >
            <div className="c-v-templates-container01">
              <Link to="/" className="c-v-templates-navlink05">
                <img
                  alt="image"
                  src="/playground_assets/perfect%20resume-03-1500h.png"
                  className="c-v-templates-image"
                />
              </Link>
              <div
                data-thq="thq-close-menu"
                className="c-v-templates-menu-close"
              >
                <svg viewBox="0 0 1024 1024" className="c-v-templates-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="c-v-templates-nav2"
            >
              <Link to="/resume-templates" className="c-v-templates-navlink06">
                Resume Templates
              </Link>
              <Link to="/c-v-templates" className="c-v-templates-navlink07">
                CV Templates
              </Link>
              <Link to="/cover-letters" className="c-v-templates-navlink08">
                Cover Letters
              </Link>
              <Link to="/pricing" className="c-v-templates-navlink09">
                Pricing
              </Link>
            </nav>
            <div className="c-v-templates-container02">
              <Link to="/register" className="c-v-templates-register1 Content">
                Register
              </Link>
              <Link to="/login" className="c-v-templates-login1 Content">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className="c-v-templates-container03">
        <div className="c-v-templates-container04"></div>
        <h2 className="c-v-templates-text013">CV Templates</h2>
        <h2 className="c-v-templates-text014">/ 5+ years of experience</h2>
        <div className="c-v-templates-line3"></div>
        <div className="c-v-templates-container05">
          <div className="c-v-templates-container06">
            <div className="c-v-templates-container07">
              <div className="c-v-templates-container08">
                <span className="c-v-templates-text015">Resumes</span>
                <span className="c-v-templates-text016">
                  Student/Intermediate
                </span>
              </div>
              <div className="c-v-templates-container09">
                <span className="c-v-templates-text017">CVs</span>
                <span className="c-v-templates-text018">Senior</span>
              </div>
              <div className="c-v-templates-container10">
                <span className="c-v-templates-text019">Cover Letters</span>
                <span className="c-v-templates-text020">
                  All levels of experience
                </span>
              </div>
            </div>
            <div className="c-v-templates-container11">
              <div className="c-v-templates-container12">
                <h1 className="c-v-templates-text021">
                  Pick your CV template and get started
                </h1>
                <span className="c-v-templates-text022">
                  Our CV templates are designed with your success in mind.
                  They&apos;re all free (with premium features), ATS-friendly,
                  and easy-to-read!
                </span>
              </div>
              <div className="c-v-templates-container13">
                <img
                  alt="image"
                  src="/playground_assets/resume_templateer-removebg-preview-400w.png"
                  className="c-v-templates-image01"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="c-v-templates-container14">
          <div className="c-v-templates-container15">
            <img
              alt="image"
              src="/playground_assets/cv%20template-1500w.png"
              className="c-v-templates-image02"
            />
            <div className="c-v-templates-container16">
              <span className="c-v-templates-text023">Minimalist</span>
              <span className="c-v-templates-text024 Content">
                A simple and easy to follow resume template. Perfect for more
                conservative industries which prefer less flashy templates.
              </span>
            </div>
          </div>
          <div className="c-v-templates-container17">
            <img
              alt="image"
              src="/playground_assets/resume%20template-1500w.png"
              className="c-v-templates-image03"
            />
            <div className="c-v-templates-container18">
              <span className="c-v-templates-text025">Traditional</span>
              <span className="c-v-templates-text026 Content">
                A straightforward format that gives equal importance to all
                resume sections, emphasising skills and work experience.
              </span>
            </div>
          </div>
          <div className="c-v-templates-container19">
            <img
              alt="image"
              src="/playground_assets/resume%20template-1500w.png"
              className="c-v-templates-image04"
            />
            <div className="c-v-templates-container20">
              <span className="c-v-templates-text027">Creative</span>
              <span className="c-v-templates-text028 Content">
                Land your dream job in the creative industries by using this
                creative resume template, which will make your application stand
                out.
              </span>
            </div>
          </div>
          <div className="c-v-templates-container21">
            <img
              alt="image"
              src="/playground_assets/cv%20template-1500w.png"
              className="c-v-templates-image05"
            />
            <div className="c-v-templates-container22">
              <span className="c-v-templates-text029">Modern</span>
              <span className="c-v-templates-text030 Content">
                It can be hard to stand out from the crowd, but this modern
                resume sample will take care of this.
              </span>
            </div>
          </div>
        </div>
        <div className="c-v-templates-container23">
          <div className="c-v-templates-container24">
            <img
              alt="image"
              src="/playground_assets/cv%20template-1500w.png"
              className="c-v-templates-image06"
            />
            <div className="c-v-templates-container25">
              <span className="c-v-templates-text031">Minimalist</span>
              <span className="c-v-templates-text032 Content">
                A simple and easy to follow resume template. Perfect for more
                conservative industries which prefer less flashy templates.
              </span>
            </div>
          </div>
          <div className="c-v-templates-container26">
            <img
              alt="image"
              src="/playground_assets/resume%20template-1500w.png"
              className="c-v-templates-image07"
            />
            <div className="c-v-templates-container27">
              <span className="c-v-templates-text033">Traditional</span>
              <span className="c-v-templates-text034 Content">
                A straightforward format that gives equal importance to all
                resume sections, emphasising skills and work experience.
              </span>
            </div>
          </div>
          <div className="c-v-templates-container28">
            <img
              alt="image"
              src="/playground_assets/resume%20template-1500w.png"
              className="c-v-templates-image08"
            />
            <div className="c-v-templates-container29">
              <span className="c-v-templates-text035">Creative</span>
              <span className="c-v-templates-text036 Content">
                Land your dream job in the creative industries by using this
                creative resume template, which will make your application stand
                out.
              </span>
            </div>
          </div>
          <div className="c-v-templates-container30">
            <img
              alt="image"
              src="/playground_assets/cv%20template-1500w.png"
              className="c-v-templates-image09"
            />
            <div className="c-v-templates-container31">
              <span className="c-v-templates-text037">Modern</span>
              <span className="c-v-templates-text038 Content">
                It can be hard to stand out from the crowd, but this modern
                resume sample will take care of this.
              </span>
            </div>
          </div>
        </div>
        <div className="c-v-templates-container32">
          <div className="c-v-templates-container33">
            <img
              alt="image"
              src="/playground_assets/cv%20template-1500w.png"
              className="c-v-templates-image10"
            />
            <div className="c-v-templates-container34">
              <span className="c-v-templates-text039">Minimalist</span>
              <span className="c-v-templates-text040 Content">
                A simple and easy to follow resume template. Perfect for more
                conservative industries which prefer less flashy templates.
              </span>
            </div>
          </div>
          <div className="c-v-templates-container35">
            <img
              alt="image"
              src="/playground_assets/resume%20template-1500w.png"
              className="c-v-templates-image11"
            />
            <div className="c-v-templates-container36">
              <span className="c-v-templates-text041">Traditional</span>
              <span className="c-v-templates-text042 Content">
                A straightforward format that gives equal importance to all
                resume sections, emphasising skills and work experience.
              </span>
            </div>
          </div>
          <div className="c-v-templates-container37">
            <img
              alt="image"
              src="/playground_assets/resume%20template-1500w.png"
              className="c-v-templates-image12"
            />
            <div className="c-v-templates-container38">
              <span className="c-v-templates-text043">Creative</span>
              <span className="c-v-templates-text044 Content">
                Land your dream job in the creative industries by using this
                creative resume template, which will make your application stand
                out.
              </span>
            </div>
          </div>
          <div className="c-v-templates-container39">
            <img
              alt="image"
              src="/playground_assets/cv%20template-1500w.png"
              className="c-v-templates-image13"
            />
            <div className="c-v-templates-container40">
              <span className="c-v-templates-text045">Modern</span>
              <span className="c-v-templates-text046 Content">
                It can be hard to stand out from the crowd, but this modern
                resume sample will take care of this.
              </span>
            </div>
          </div>
        </div>
        <div className="c-v-templates-container41">
          <div className="c-v-templates-container42">
            <img
              alt="image"
              src="/playground_assets/cv%20template-1500w.png"
              className="c-v-templates-image14"
            />
            <div className="c-v-templates-container43">
              <span className="c-v-templates-text047">Minimalist</span>
              <span className="c-v-templates-text048 Content">
                A simple and easy to follow resume template. Perfect for more
                conservative industries which prefer less flashy templates.
              </span>
            </div>
          </div>
          <div className="c-v-templates-container44">
            <img
              alt="image"
              src="/playground_assets/resume%20template-1500w.png"
              className="c-v-templates-image15"
            />
            <div className="c-v-templates-container45">
              <span className="c-v-templates-text049">Traditional</span>
              <span className="c-v-templates-text050 Content">
                A straightforward format that gives equal importance to all
                resume sections, emphasising skills and work experience.
              </span>
            </div>
          </div>
          <div className="c-v-templates-container46">
            <img
              alt="image"
              src="/playground_assets/resume%20template-1500w.png"
              className="c-v-templates-image16"
            />
            <div className="c-v-templates-container47">
              <span className="c-v-templates-text051">Creative</span>
              <span className="c-v-templates-text052 Content">
                Land your dream job in the creative industries by using this
                creative resume template, which will make your application stand
                out.
              </span>
            </div>
          </div>
          <div className="c-v-templates-container48">
            <img
              alt="image"
              src="/playground_assets/cv%20template-1500w.png"
              className="c-v-templates-image17"
            />
            <div className="c-v-templates-container49">
              <span className="c-v-templates-text053">Modern</span>
              <span className="c-v-templates-text054 Content">
                It can be hard to stand out from the crowd, but this modern
                resume sample will take care of this.
              </span>
            </div>
          </div>
        </div>
        <div className="c-v-templates-blog">
          <h1 className="c-v-templates-text055">Why Perfect Resume?</h1>
          <div className="c-v-templates-line31"></div>
          <div className="c-v-templates-listing">
            <div className="c-v-templates-component-content-blog-example">
              <div className="c-v-templates-container50">
                <img
                  alt="image"
                  src="/playground_assets/ecommerce__554_-removebg-preview-200h.png"
                  className="c-v-templates-image18"
                />
                <div className="c-v-templates-container51">
                  <h1 className="c-v-templates-text056">Free AND Premium</h1>
                  <span className="c-v-templates-text057">
                    We offer both free and premium features. Want your resume to
                    have that extra punch? Upgrade to Premium. On a budget?
                    That&apos;s OK too - you can use our resume buider
                    completely free of charge.
                  </span>
                </div>
              </div>
              <div className="c-v-templates-container52">
                <img
                  alt="image"
                  src="/playground_assets/men-removebg-preview-200h.png"
                  className="c-v-templates-image19"
                />
                <div className="c-v-templates-container53">
                  <h1 className="c-v-templates-text058">
                    Creative and Professional Resume Templates
                  </h1>
                  <span className="c-v-templates-text059">
                    Whatever resume template you&apos;re looking for, we&apos;ve
                    got it! Whether it&apos;s a classic black-and-white
                    template, or something a bit more outside the box, we have
                    what you need!
                  </span>
                </div>
              </div>
            </div>
            <div className="c-v-templates-component-content-blog-example1">
              <div className="c-v-templates-container54">
                <img
                  alt="image"
                  src="/playground_assets/men-removebg-preview-200h.png"
                  className="c-v-templates-image20"
                />
                <div className="c-v-templates-container55">
                  <h1 className="c-v-templates-text060">NO Hidden Fees</h1>
                  <span className="c-v-templates-text061">
                    With Perfect Resume , you won’t spend hours working on your
                    resume, just to be hit with a hidden paywall. Our resume
                    builder will notify you if you’re using any of our premium
                    features in advance.
                  </span>
                </div>
              </div>
              <div className="c-v-templates-container56">
                <img
                  alt="image"
                  src="/playground_assets/ecommerce__554_-removebg-preview-200h.png"
                  className="c-v-templates-image21"
                />
                <div className="c-v-templates-container57">
                  <h1 className="c-v-templates-text062">ATS-Friendly</h1>
                  <span className="c-v-templates-text063">
                    Our resume templates are ATS-friendly. It means your resume
                    won’t automatically be rejected because an ATS can’t read
                    it.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="c-v-templates-testimonial">
          <h1 className="c-v-templates-text064">Expert Reviews</h1>
          <div className="c-v-templates-line32"></div>
          <div className="c-v-templates-container58">
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
      <div className="c-v-templates-container59">
        <div className="c-v-templates-container60">
          <h1 className="c-v-templates-text065">CV Resources</h1>
          <div className="c-v-templates-line33"></div>
        </div>
        <div className="c-v-templates-banner">
          <img
            alt="image"
            src="/playground_assets/it_10_generated-removebg-preview-1100w.png"
            loading="lazy"
            className="c-v-templates-image22"
          />
          <div className="c-v-templates-container61">
            <h1 className="c-v-templates-text066">
              Why should I use a resume builder?
            </h1>
            <span className="c-v-templates-text067">
              Using a resume builder makes the process of creating a resume
              significantly faster and easier. Ever tried building your resume
              with Word?
            </span>
            <span className="c-v-templates-text068">
              The whole process is a huge pain – you make a TINY change to your
              resume, and the entire resume layout gets completely messed up.
            </span>
            <span className="c-v-templates-text069">
              With a resume builder, you don’t have to worry about the nitty
              gritty of resume creation, like font selection, layout,
              formatting, etc.
            </span>
            <span className="c-v-templates-text070">
              All you have to do is pick a resume template, fill it in, and then
              you’re ready to start applying for jobs!
            </span>
          </div>
        </div>
        <div className="c-v-templates-banner1">
          <div className="c-v-templates-container62">
            <h1 className="c-v-templates-text071">
              What is the best resume builder?
            </h1>
            <span className="c-v-templates-text072">
              Over the past 7 years, we’ve been working hard to make Perfect
              Resume the best resume builder out there.
            </span>
            <span className="c-v-templates-text073">
              And we’d say we succeeded! Here’s what sets us apart from the rest
              of the competition:
            </span>
            <span className="c-v-templates-text074">
              Easy to Use - Our builder is very easy to use, even if you&apos;re
              not too tech-friendly.
            </span>
            <span className="c-v-templates-text075">
              Get Started in under 5 Minutes - Just pick one of our resume
              templates, and you&apos;re good to go!
            </span>
            <span className="c-v-templates-text076">
              It&apos;s 100% free - Some resume builders out there pretend to be
              free… and then they hit you with a paywall once you’re done
              writing your resume! We don’t do that. Our builder will instantly
              notify you if you’re using any of our premium features.
            </span>
            <span className="c-v-templates-text077">
              Cover Letter Builder - If you’re using Perfect Resume Premium, you
              gain access to our cover letter builder for free (including
              matching cover letter templates).
            </span>
            <span className="c-v-templates-text078">
              Tons of Customization and Design Options - Our builder offers a
              ton of customization. You can make changes to the layout, color
              schemes, and much more.
            </span>
            <span className="c-v-templates-text079">
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
            className="c-v-templates-image23"
          />
        </div>
        <div className="c-v-templates-banner2">
          <img
            alt="image"
            src="/playground_assets/it_10_generated-removebg-preview-1100w.png"
            loading="lazy"
            className="c-v-templates-image24"
          />
          <div className="c-v-templates-container63">
            <h1 className="c-v-templates-text080">
              Is this a completely free resume builder?
            </h1>
            <span className="c-v-templates-text081">
              Yes, Perfect Resume is a 100% free resume builder.
            </span>
            <span className="c-v-templates-text082">
              If you’re on a budget, you can use it to create your resume
              completely free of charge. And no, unlike some other resume
              builders out there, we don’t hit you with a paywall once you’ve
              completed your resume.
            </span>
            <span className="c-v-templates-text083">
              If you use any of our premium features, the software will let you
              know about it. It will then ask if you did it accidentally, or if
              you would like to upgrade to Novorésumé Premium. You&apos;re in
              control!
            </span>
          </div>
        </div>
        <div className="c-v-templates-banner3">
          <div className="c-v-templates-container64">
            <h1 className="c-v-templates-text084">What is a resume?</h1>
            <span className="c-v-templates-text085">
              A resume (also known as a CV, or curriculum vitae) is a 1-2 page
              document that summarizes your work experience and career history.
            </span>
            <span className="c-v-templates-text086">
              It usually includes information about the following:
            </span>
            <span className="c-v-templates-text087">Your work history</span>
            <span className="c-v-templates-text088">
              Educational background
            </span>
            <span className="c-v-templates-text089">Achievements</span>
            <span className="c-v-templates-text090">Contact information</span>
            <span className="c-v-templates-text091">
              Resume summary or resume objective
            </span>
          </div>
          <img
            alt="image"
            src="/playground_assets/it_10_generated-removebg-preview-1100w.png"
            loading="lazy"
            className="c-v-templates-image25"
          />
        </div>
        <div className="c-v-templates-banner4">
          <img
            alt="image"
            src="/playground_assets/it_10_generated-removebg-preview-1100w.png"
            loading="lazy"
            className="c-v-templates-image26"
          />
          <div className="c-v-templates-container65">
            <h1 className="c-v-templates-text092">
              What&apos;s the difference between a CV and a resume?
            </h1>
            <span className="c-v-templates-text093">
              In the EU, the words &quot;CV&quot; and &quot;resume&quot; are
              used interchangeably
            </span>
            <span className="c-v-templates-text094">
              In the United States, however, a resume is a document you use to
              apply for jobs, while a CV is mainly used by academics.
            </span>
            <span className="c-v-templates-text095">
              Want to learn more? Check out our article on the differences
              between CVs and resumes.
            </span>
          </div>
        </div>
        <div className="c-v-templates-banner5">
          <div className="c-v-templates-container66">
            <h1 className="c-v-templates-text096">
              How can I create my resume?
            </h1>
            <span className="c-v-templates-text097">
              Making a resume with Perfect Resume is very straightforward.
            </span>
            <span className="c-v-templates-text098">
              Just pick one of our professional resume templates.
            </span>
            <span className="c-v-templates-text099">
              Then, you’ll be forwarded to our resume builder, where all you
              have to do is fill in your resume content!
            </span>
          </div>
          <img
            alt="image"
            src="/playground_assets/it_10_generated-removebg-preview-1100w.png"
            loading="lazy"
            className="c-v-templates-image27"
          />
        </div>
        <div className="c-v-templates-banner6">
          <img
            alt="image"
            src="/playground_assets/it_10_generated-removebg-preview-1100w.png"
            loading="lazy"
            className="c-v-templates-image28"
          />
          <div className="c-v-templates-container67">
            <h1 className="c-v-templates-text100">
              What should a resume include?
            </h1>
            <span className="c-v-templates-text101">
              The must-have contents in your resume include the following
              sections:
            </span>
            <span className="c-v-templates-text102">Work Experience</span>
            <span className="c-v-templates-text103">
              Educational Background
            </span>
            <span className="c-v-templates-text104">Contact Information</span>
            <span className="c-v-templates-text105">
              Resume summary or Resume Objective
            </span>
            <span className="c-v-templates-text106">
              The optional ones are:
            </span>
            <span className="c-v-templates-text107">
              Hobbies &amp; Interests
            </span>
            <span className="c-v-templates-text108">Skills</span>
            <span className="c-v-templates-text109">
              Volunteering Experience
            </span>
          </div>
        </div>
      </div>
      <div className="c-v-templates-container68">
        <div className="c-v-templates-container69"></div>
        <h2 className="c-v-templates-text110">
          Get Inspired with Our Resume Examples
        </h2>
        <div className="c-v-templates-line34"></div>
        <div className="c-v-templates-container70">
          <div className="c-v-templates-container71">
            <img
              alt="image"
              src="/playground_assets/cv%20template-1500w.png"
              className="c-v-templates-image29"
            />
            <div className="c-v-templates-container72">
              <span className="c-v-templates-text111">
                Data Entry Specialist
              </span>
              <span className="c-v-templates-text112 Content">
                A resume template as creative as your imagination
              </span>
            </div>
          </div>
          <div className="c-v-templates-container73">
            <img
              alt="image"
              src="/playground_assets/resume%20template-1500w.png"
              className="c-v-templates-image30"
            />
            <div className="c-v-templates-container74">
              <span className="c-v-templates-text113">Graphic Designer</span>
              <span className="c-v-templates-text114 Content">
                A resume template as creative as your imagination
              </span>
            </div>
          </div>
          <div className="c-v-templates-container75">
            <img
              alt="image"
              src="/playground_assets/cv%20template-1500w.png"
              className="c-v-templates-image31"
            />
            <div className="c-v-templates-container76">
              <span className="c-v-templates-text115">
                Bookkeeper &amp; Accounting
              </span>
              <span className="c-v-templates-text116 Content">
                A resume template as creative as your imagination
              </span>
            </div>
          </div>
        </div>
        <button className="c-v-templates-register2">
          Browse More Examples
        </button>
      </div>
      <div className="c-v-templates-container77">
        <h2 className="c-v-templates-text117">Resume Templates FAQ?</h2>
        <div className="c-v-templates-line35"></div>
        <div className="c-v-templates-container78">
          <div className="c-v-templates-container79">
            <div className="c-v-templates-container80">
              <h1 className="c-v-templates-text118">
                Who Created These CV Samples?
              </h1>
              <span className="c-v-templates-text119">
                <span>
                  All of our CV samples are hand-craft by a professional graphic
                  designer at Perfect Resume.
                </span>
                <br className="c-v-templates-text121"></br>
                <br className="c-v-templates-text122"></br>
                <span>
                  We put a lot of care in creating each and every one of our CV
                  samples:
                </span>
                <br className="c-v-templates-text124"></br>
                <br className="c-v-templates-text125"></br>
                <br className="c-v-templates-text126"></br>
                <span>
                  We interviewed and conducted research with dozens of
                  recruiters and employers to learn what they look for in a good
                  CV
                </span>
                <br className="c-v-templates-text128"></br>
                <br className="c-v-templates-text129"></br>
                <span>
                  Analyzed the world’s most popular applicant tracking systems,
                  and made sure that they work with our CV templates
                </span>
                <br className="c-v-templates-text131"></br>
                <br className="c-v-templates-text132"></br>
                <span>
                  Polished each CV sample to perfection, ensuring that it’s easy
                  to read and follow
                </span>
                <br className="c-v-templates-text134"></br>
                <br className="c-v-templates-text135"></br>
                <span>
                  All this to create a CV template that maximizes your chances
                  of landing the job!
                </span>
              </span>
            </div>
            <div className="c-v-templates-container81">
              <h1 className="c-v-templates-text137">
                PDF CV Templates vs. Word CV Templates
              </h1>
              <span className="c-v-templates-text138">
                <span>
                  At Perfect Resume, all our CV templates are in PDF format for
                  several reasons. Namely, PDF looks much better across all
                  devices and is a lot more secure than Word.
                </span>
                <br></br>
                <br></br>
                <span>
                  The only reason that Word CV templates were a standard a few
                  years back was that most Applicant Tracking Systems (ATS)
                  could not read PDF.
                </span>
                <br></br>
                <br></br>
                <span>
                  This is NOT true for 2022, and overall, PDF is a much better
                  format.
                </span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
        <div className="c-v-templates-container82">
          <div className="c-v-templates-container83">
            <h1 className="c-v-templates-text147">
              Are These CV Templates ATS-Friendly?
            </h1>
            <span className="c-v-templates-text148">
              <span>
                Yes. All our CV templates are created to work with all the
                popular Applicant Tracking Systems.
              </span>
              <br></br>
              <br></br>
              <span>
                Using an ATS CV template, however, is only step #1. You should
                also learn how to tailor your CV contents to the job you’re
                applying for. To learn more about how to do this, check out our
                guide on creating an ATS-friendly resume.
              </span>
            </span>
          </div>
          <div className="c-v-templates-container84">
            <h1 className="c-v-templates-text153">
              Are These Free CV Templates?
            </h1>
            <span className="c-v-templates-text154">
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
      <div className="c-v-templates-social-bar">
        <svg
          viewBox="0 0 950.8571428571428 1024"
          className="c-v-templates-icon04"
        >
          <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
        </svg>
        <svg
          viewBox="0 0 877.7142857142857 1024"
          className="c-v-templates-icon06"
        >
          <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
        </svg>
        <svg
          viewBox="0 0 602.2582857142856 1024"
          className="c-v-templates-icon08"
        >
          <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
        </svg>
        <svg
          viewBox="0 0 877.7142857142857 1024"
          className="c-v-templates-icon10"
        >
          <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="c-v-templates-icon12">
          <path d="M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z"></path>
        </svg>
      </div>
      <footer className="c-v-templates-footer">
        <div className="c-v-templates-links-container">
          <div className="c-v-templates-container85">
            <div className="c-v-templates-container86">
              <span className="c-v-templates-text157">Perfect Resume</span>
              <span className="c-v-templates-text158">Homepage</span>
              <span className="c-v-templates-text159">Resume Templates</span>
              <span className="c-v-templates-text160">CV Templates</span>
              <span className="c-v-templates-text161">Cover Letters</span>
            </div>
            <div className="c-v-templates-container87">
              <span className="c-v-templates-text162">Learn</span>
              <span className="c-v-templates-text163">Career Blog</span>
              <span className="c-v-templates-text164">
                How to Write a Resume
              </span>
              <span className="c-v-templates-text165">How to Write CV</span>
              <span className="c-v-templates-text166">
                How to Write a Cover Letter
              </span>
              <span className="c-v-templates-text167">Resume Examples</span>
              <span className="c-v-templates-text168">
                Cover Letter Examples
              </span>
            </div>
          </div>
          <div className="c-v-templates-container88">
            <div className="c-v-templates-container89">
              <span className="c-v-templates-text169">Other</span>
              <span className="c-v-templates-text170">Pricing</span>
              <span className="c-v-templates-text171">About Us</span>
              <span className="c-v-templates-text172">
                E-book: How to get a job in 2022
              </span>
              <span className="c-v-templates-text173">Media Kit</span>
              <span className="c-v-templates-text174">Help Center</span>
            </div>
            <div className="c-v-templates-container90">
              <span className="c-v-templates-text175">Resources</span>
              <span className="c-v-templates-text176">Terms of Use</span>
              <span className="c-v-templates-text177">Privacy Policy</span>
              <span className="c-v-templates-text178">Cookie Policy</span>
              <span className="c-v-templates-text179">
                contact@perfectresume.com
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default CVTemplates
