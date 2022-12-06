import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import TestimonialCard3 from '../components/testimonial-card3'
import './cover-letters.css'

const CoverLetters = (props) => {
  return (
    <div className="cover-letters-container">
      <Helmet>
        <title>Cover-Letters - Perfect Resume</title>
        <meta property="og:title" content="Cover-Letters - Perfect Resume" />
      </Helmet>
      <header
        data-thq="thq-navbar"
        className="cover-letters-navbar-interactive"
      >
        <Link to="/" className="cover-letters-navlink">
          <img
            alt="logo"
            src="/playground_assets/perfect%20resume-03-1500h.png"
            className="cover-letters-logo"
          />
        </Link>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="cover-letters-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="cover-letters-nav"
          >
            <Link to="/resume-templates" className="cover-letters-navlink01">
              Resume Templates
            </Link>
            <Link to="/c-v-templates" className="cover-letters-navlink02">
              CV Templates
            </Link>
            <Link to="/cover-letters" className="cover-letters-navlink03">
              Cover Letters
            </Link>
            <Link to="/pricing" className="cover-letters-navlink04">
              Pricing
            </Link>
          </nav>
          <div
            data-thq="thq-dropdown"
            className="cover-letters-thq-dropdown list-item"
          >
            <ul
              data-thq="thq-dropdown-list"
              className="cover-letters-dropdown-list"
            >
              <li
                data-thq="thq-dropdown"
                className="cover-letters-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="cover-letters-dropdown-toggle"
                >
                  <span className="cover-letters-text">All Articles</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="cover-letters-dropdown01 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="cover-letters-dropdown-toggle01"
                >
                  <span className="cover-letters-text001">
                    Resume CV Writing
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="cover-letters-dropdown02 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="cover-letters-dropdown-toggle02"
                >
                  <span className="cover-letters-text002">
                    Cover Letter Writing
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="cover-letters-dropdown03 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="cover-letters-dropdown-toggle03"
                >
                  <span className="cover-letters-text003">Examples</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="cover-letters-dropdown04 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="cover-letters-dropdown-toggle04"
                >
                  <span className="cover-letters-text004">
                    Personal Development
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="cover-letters-dropdown05 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="cover-letters-dropdown-toggle05"
                >
                  <span className="cover-letters-text005">
                    Inspiring Stories
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="cover-letters-dropdown06 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="cover-letters-dropdown-toggle06"
                >
                  <span className="cover-letters-text006">
                    Interviews &amp; Find Jobs
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div
            data-thq="thq-dropdown"
            className="cover-letters-thq-dropdown1 list-item"
          >
            <ul
              data-thq="thq-dropdown-list"
              className="cover-letters-dropdown-list1"
            >
              <li
                data-thq="thq-dropdown"
                className="cover-letters-dropdown07 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="cover-letters-dropdown-toggle07"
                >
                  <span className="cover-letters-text007">EN US</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="cover-letters-dropdown08 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="cover-letters-dropdown-toggle08"
                >
                  <span className="cover-letters-text008">Dansk</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="cover-letters-dropdown09 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="cover-letters-dropdown-toggle09"
                >
                  <span className="cover-letters-text009">Deutsch</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="cover-letters-dropdown10 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="cover-letters-dropdown-toggle10"
                >
                  <span className="cover-letters-text010">English US</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="cover-letters-dropdown11 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="cover-letters-dropdown-toggle11"
                >
                  <span className="cover-letters-text011">English UK</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="cover-letters-dropdown12 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="cover-letters-dropdown-toggle12"
                >
                  <span className="cover-letters-text012">Espanol</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div
          data-thq="thq-navbar-btn-group"
          className="cover-letters-btn-group"
        >
          <Link to="/register" className="cover-letters-register">
            Register
          </Link>
          <Link to="/login" className="cover-letters-login">
            Sign In
          </Link>
        </div>
        <div data-thq="thq-burger-menu" className="cover-letters-burger-menu">
          <svg viewBox="0 0 1024 1024" className="cover-letters-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="cover-letters-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="cover-letters-nav1"
          >
            <div className="cover-letters-container01">
              <Link to="/" className="cover-letters-navlink05">
                <img
                  alt="image"
                  src="/playground_assets/perfect%20resume-03-1500h.png"
                  className="cover-letters-image"
                />
              </Link>
              <div
                data-thq="thq-close-menu"
                className="cover-letters-menu-close"
              >
                <svg viewBox="0 0 1024 1024" className="cover-letters-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="cover-letters-nav2"
            >
              <Link to="/resume-templates" className="cover-letters-navlink06">
                Resume Templates
              </Link>
              <Link to="/c-v-templates" className="cover-letters-navlink07">
                CV Templates
              </Link>
              <Link to="/cover-letters" className="cover-letters-navlink08">
                Cover Letters
              </Link>
              <Link to="/pricing" className="cover-letters-navlink09">
                Pricing
              </Link>
            </nav>
            <div className="cover-letters-container02">
              <Link to="/register" className="cover-letters-register1 Content">
                Register
              </Link>
              <Link to="/login" className="cover-letters-login1 Content">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className="cover-letters-container03">
        <div className="cover-letters-container04"></div>
        <h2 className="cover-letters-text013">Cover Letter Templates</h2>
        <h2 className="cover-letters-text014">/ any level of experience</h2>
        <div className="cover-letters-line3"></div>
        <div className="cover-letters-container05">
          <div className="cover-letters-container06">
            <div className="cover-letters-container07">
              <div className="cover-letters-container08">
                <span className="cover-letters-text015">Resumes</span>
                <span className="cover-letters-text016">
                  Student/Intermediate
                </span>
              </div>
              <div className="cover-letters-container09">
                <span className="cover-letters-text017">CVs</span>
                <span className="cover-letters-text018">Senior</span>
              </div>
              <div className="cover-letters-container10">
                <span className="cover-letters-text019">Cover Letters</span>
                <span className="cover-letters-text020">
                  All levels of experience
                </span>
              </div>
            </div>
            <div className="cover-letters-container11">
              <div className="cover-letters-container12">
                <h1 className="cover-letters-text021">
                  16+ Convincing Cover Letter Templates [Pick &amp; Download]
                </h1>
                <span className="cover-letters-text022">
                  Looking to create a cover letter that sounds out? Try one of
                  our 12 cover letter templates (and land that job)!
                </span>
              </div>
              <div className="cover-letters-container13">
                <img
                  alt="image"
                  src="/playground_assets/resume_templateer-removebg-preview-400w.png"
                  className="cover-letters-image01"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="cover-letters-container14">
          <div className="cover-letters-container15">
            <img
              alt="image"
              src="/playground_assets/cv%20template-1500w.png"
              className="cover-letters-image02"
            />
            <div className="cover-letters-container16">
              <span className="cover-letters-text023">Minimalist</span>
              <span className="cover-letters-text024">
                A simple and easy to follow resume template. Perfect for more
                conservative industries which prefer less flashy templates.
              </span>
            </div>
          </div>
          <div className="cover-letters-container17">
            <img
              alt="image"
              src="/playground_assets/resume%20template-1500w.png"
              className="cover-letters-image03"
            />
            <div className="cover-letters-container18">
              <span className="cover-letters-text025">Traditional</span>
              <span className="cover-letters-text026 Content">
                A straightforward format that gives equal importance to all
                resume sections, emphasising skills and work experience.
              </span>
            </div>
          </div>
          <div className="cover-letters-container19">
            <img
              alt="image"
              src="/playground_assets/resume%20template-1500w.png"
              className="cover-letters-image04"
            />
            <div className="cover-letters-container20">
              <span className="cover-letters-text027">Creative</span>
              <span className="cover-letters-text028 Content">
                Land your dream job in the creative industries by using this
                creative resume template, which will make your application stand
                out.
              </span>
            </div>
          </div>
          <div className="cover-letters-container21">
            <img
              alt="image"
              src="/playground_assets/cv%20template-1500w.png"
              className="cover-letters-image05"
            />
            <div className="cover-letters-container22">
              <span className="cover-letters-text029">Modern</span>
              <span className="cover-letters-text030 Content">
                It can be hard to stand out from the crowd, but this modern
                resume sample will take care of this.
              </span>
            </div>
          </div>
        </div>
        <div className="cover-letters-container23">
          <div className="cover-letters-container24">
            <img
              alt="image"
              src="/playground_assets/cv%20template-1500w.png"
              className="cover-letters-image06"
            />
            <div className="cover-letters-container25">
              <span className="cover-letters-text031">Minimalist</span>
              <span className="cover-letters-text032">
                A simple and easy to follow resume template. Perfect for more
                conservative industries which prefer less flashy templates.
              </span>
            </div>
          </div>
          <div className="cover-letters-container26">
            <img
              alt="image"
              src="/playground_assets/resume%20template-1500w.png"
              className="cover-letters-image07"
            />
            <div className="cover-letters-container27">
              <span className="cover-letters-text033">Traditional</span>
              <span className="cover-letters-text034 Content">
                A straightforward format that gives equal importance to all
                resume sections, emphasising skills and work experience.
              </span>
            </div>
          </div>
          <div className="cover-letters-container28">
            <img
              alt="image"
              src="/playground_assets/resume%20template-1500w.png"
              className="cover-letters-image08"
            />
            <div className="cover-letters-container29">
              <span className="cover-letters-text035">Creative</span>
              <span className="cover-letters-text036 Content">
                Land your dream job in the creative industries by using this
                creative resume template, which will make your application stand
                out.
              </span>
            </div>
          </div>
          <div className="cover-letters-container30">
            <img
              alt="image"
              src="/playground_assets/cv%20template-1500w.png"
              className="cover-letters-image09"
            />
            <div className="cover-letters-container31">
              <span className="cover-letters-text037">Modern</span>
              <span className="cover-letters-text038 Content">
                It can be hard to stand out from the crowd, but this modern
                resume sample will take care of this.
              </span>
            </div>
          </div>
        </div>
        <div className="cover-letters-container32">
          <div className="cover-letters-container33">
            <img
              alt="image"
              src="/playground_assets/cv%20template-1500w.png"
              className="cover-letters-image10"
            />
            <div className="cover-letters-container34">
              <span className="cover-letters-text039">Minimalist</span>
              <span className="cover-letters-text040">
                A simple and easy to follow resume template. Perfect for more
                conservative industries which prefer less flashy templates.
              </span>
            </div>
          </div>
          <div className="cover-letters-container35">
            <img
              alt="image"
              src="/playground_assets/resume%20template-1500w.png"
              className="cover-letters-image11"
            />
            <div className="cover-letters-container36">
              <span className="cover-letters-text041">Traditional</span>
              <span className="cover-letters-text042 Content">
                A straightforward format that gives equal importance to all
                resume sections, emphasising skills and work experience.
              </span>
            </div>
          </div>
          <div className="cover-letters-container37">
            <img
              alt="image"
              src="/playground_assets/resume%20template-1500w.png"
              className="cover-letters-image12"
            />
            <div className="cover-letters-container38">
              <span className="cover-letters-text043">Creative</span>
              <span className="cover-letters-text044 Content">
                Land your dream job in the creative industries by using this
                creative resume template, which will make your application stand
                out.
              </span>
            </div>
          </div>
          <div className="cover-letters-container39">
            <img
              alt="image"
              src="/playground_assets/cv%20template-1500w.png"
              className="cover-letters-image13"
            />
            <div className="cover-letters-container40">
              <span className="cover-letters-text045">Modern</span>
              <span className="cover-letters-text046 Content">
                It can be hard to stand out from the crowd, but this modern
                resume sample will take care of this.
              </span>
            </div>
          </div>
        </div>
        <div className="cover-letters-container41">
          <div className="cover-letters-container42">
            <img
              alt="image"
              src="/playground_assets/cv%20template-1500w.png"
              className="cover-letters-image14"
            />
            <div className="cover-letters-container43">
              <span className="cover-letters-text047">Minimalist</span>
              <span className="cover-letters-text048">
                A simple and easy to follow resume template. Perfect for more
                conservative industries which prefer less flashy templates.
              </span>
            </div>
          </div>
          <div className="cover-letters-container44">
            <img
              alt="image"
              src="/playground_assets/resume%20template-1500w.png"
              className="cover-letters-image15"
            />
            <div className="cover-letters-container45">
              <span className="cover-letters-text049">Traditional</span>
              <span className="cover-letters-text050 Content">
                A straightforward format that gives equal importance to all
                resume sections, emphasising skills and work experience.
              </span>
            </div>
          </div>
          <div className="cover-letters-container46">
            <img
              alt="image"
              src="/playground_assets/resume%20template-1500w.png"
              className="cover-letters-image16"
            />
            <div className="cover-letters-container47">
              <span className="cover-letters-text051">Creative</span>
              <span className="cover-letters-text052 Content">
                Land your dream job in the creative industries by using this
                creative resume template, which will make your application stand
                out.
              </span>
            </div>
          </div>
          <div className="cover-letters-container48">
            <img
              alt="image"
              src="/playground_assets/cv%20template-1500w.png"
              className="cover-letters-image17"
            />
            <div className="cover-letters-container49">
              <span className="cover-letters-text053">Modern</span>
              <span className="cover-letters-text054 Content">
                It can be hard to stand out from the crowd, but this modern
                resume sample will take care of this.
              </span>
            </div>
          </div>
        </div>
        <div className="cover-letters-testimonial">
          <h1 className="cover-letters-text055">Expert Reviews</h1>
          <div className="cover-letters-line31"></div>
          <div className="cover-letters-container50">
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
        <div className="cover-letters-blog">
          <h1 className="cover-letters-text056">Why Perfect Resume?</h1>
          <div className="cover-letters-line32"></div>
          <div className="cover-letters-listing">
            <div className="cover-letters-component-content-blog-example">
              <div className="cover-letters-container51">
                <img
                  alt="image"
                  src="/playground_assets/ecommerce__554_-removebg-preview-200h.png"
                  className="cover-letters-image18"
                />
                <div className="cover-letters-container52">
                  <h1 className="cover-letters-text057">
                    Matching Cover Letters
                  </h1>
                  <span className="cover-letters-text058">
                    To keep your job application consistent and professional,
                    our Cover Letter templates perfectly match the resume
                    templates.
                  </span>
                </div>
              </div>
              <div className="cover-letters-container53">
                <img
                  alt="image"
                  src="/playground_assets/men-removebg-preview-200h.png"
                  className="cover-letters-image19"
                />
                <div className="cover-letters-container54">
                  <h1 className="cover-letters-text059">
                    Creative &amp; Standard Templates
                  </h1>
                  <span className="cover-letters-text060">
                    Whether you apply for a conservative industry like banking
                    or a hype start-up, you can tailor our cover letter
                    templates to fit your exact needs.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cover-letters-container55">
        <div className="cover-letters-container56"></div>
        <h2 className="cover-letters-text061">
          Get Inspired with Our Resume Examples
        </h2>
        <div className="cover-letters-line33"></div>
        <div className="cover-letters-container57">
          <div className="cover-letters-container58">
            <img
              alt="image"
              src="/playground_assets/cv%20template-1500w.png"
              className="cover-letters-image20"
            />
            <div className="cover-letters-container59">
              <span className="cover-letters-text062">
                Data Entry Specialist
              </span>
              <span className="cover-letters-text063 Content">
                A resume template as creative as your imagination
              </span>
            </div>
          </div>
          <div className="cover-letters-container60">
            <img
              alt="image"
              src="/playground_assets/resume%20template-1500w.png"
              className="cover-letters-image21"
            />
            <div className="cover-letters-container61">
              <span className="cover-letters-text064">Graphic Designer</span>
              <span className="cover-letters-text065 Content">
                A resume template as creative as your imagination
              </span>
            </div>
          </div>
          <div className="cover-letters-container62">
            <img
              alt="image"
              src="/playground_assets/cv%20template-1500w.png"
              className="cover-letters-image22"
            />
            <div className="cover-letters-container63">
              <span className="cover-letters-text066">
                Bookkeeper &amp; Accounting
              </span>
              <span className="cover-letters-text067 Content">
                A resume template as creative as your imagination
              </span>
            </div>
          </div>
        </div>
        <button className="cover-letters-register2">
          Browse More Examples
        </button>
      </div>
      <div className="cover-letters-container64">
        <div className="cover-letters-container65">
          <h1 className="cover-letters-text068">CV Resources</h1>
          <div className="cover-letters-line34"></div>
        </div>
        <div className="cover-letters-banner">
          <img
            alt="image"
            src="/playground_assets/it_10_generated-removebg-preview-1400w.png"
            loading="lazy"
            className="cover-letters-image23"
          />
          <div className="cover-letters-container66">
            <h1 className="cover-letters-text069">
              Why should I use a resume builder?
            </h1>
            <span className="cover-letters-text070">
              Using a resume builder makes the process of creating a resume
              significantly faster and easier. Ever tried building your resume
              with Word?
            </span>
            <span className="cover-letters-text071">
              The whole process is a huge pain – you make a TINY change to your
              resume, and the entire resume layout gets completely messed up.
            </span>
            <span className="cover-letters-text072">
              With a resume builder, you don’t have to worry about the nitty
              gritty of resume creation, like font selection, layout,
              formatting, etc.
            </span>
            <span className="cover-letters-text073">
              All you have to do is pick a resume template, fill it in, and then
              you’re ready to start applying for jobs!
            </span>
          </div>
        </div>
        <div className="cover-letters-banner1">
          <div className="cover-letters-container67">
            <h1 className="cover-letters-text074">
              What is the best resume builder?
            </h1>
            <span className="cover-letters-text075">
              Over the past 7 years, we’ve been working hard to make Perfect
              Resume the best resume builder out there.
            </span>
            <span className="cover-letters-text076">
              And we’d say we succeeded! Here’s what sets us apart from the rest
              of the competition:
            </span>
            <span className="cover-letters-text077">
              Easy to Use - Our builder is very easy to use, even if you&apos;re
              not too tech-friendly.
            </span>
            <span className="cover-letters-text078">
              Get Started in under 5 Minutes - Just pick one of our resume
              templates, and you&apos;re good to go!
            </span>
            <span className="cover-letters-text079">
              It&apos;s 100% free - Some resume builders out there pretend to be
              free… and then they hit you with a paywall once you’re done
              writing your resume! We don’t do that. Our builder will instantly
              notify you if you’re using any of our premium features.
            </span>
            <span className="cover-letters-text080">
              Cover Letter Builder - If you’re using Perfect Resume Premium, you
              gain access to our cover letter builder for free (including
              matching cover letter templates).
            </span>
            <span className="cover-letters-text081">
              Tons of Customization and Design Options - Our builder offers a
              ton of customization. You can make changes to the layout, color
              schemes, and much more.
            </span>
            <span className="cover-letters-text082">
              ATS-Friendly Resume Templates - Our resume templates are built on
              top of some of the most popular applicant tracking systems out
              there. Meaning, your resume won&apos;t automatically get rejected
              by any ATS.
            </span>
          </div>
          <img
            alt="image"
            src="/playground_assets/it_10_generated-removebg-preview-1400w.png"
            loading="lazy"
            className="cover-letters-image24"
          />
        </div>
        <div className="cover-letters-banner2">
          <img
            alt="image"
            src="/playground_assets/it_10_generated-removebg-preview-1400w.png"
            loading="lazy"
            className="cover-letters-image25"
          />
          <div className="cover-letters-container68">
            <h1 className="cover-letters-text083">
              Is this a completely free resume builder?
            </h1>
            <span className="cover-letters-text084">
              Yes, Perfect Resume is a 100% free resume builder.
            </span>
            <span className="cover-letters-text085">
              If you’re on a budget, you can use it to create your resume
              completely free of charge. And no, unlike some other resume
              builders out there, we don’t hit you with a paywall once you’ve
              completed your resume.
            </span>
            <span className="cover-letters-text086">
              If you use any of our premium features, the software will let you
              know about it. It will then ask if you did it accidentally, or if
              you would like to upgrade to Novorésumé Premium. You&apos;re in
              control!
            </span>
          </div>
        </div>
        <div className="cover-letters-banner3">
          <div className="cover-letters-container69">
            <h1 className="cover-letters-text087">What is a resume?</h1>
            <span className="cover-letters-text088">
              A resume (also known as a CV, or curriculum vitae) is a 1-2 page
              document that summarizes your work experience and career history.
            </span>
            <span className="cover-letters-text089">
              It usually includes information about the following:
            </span>
            <span className="cover-letters-text090">Your work history</span>
            <span className="cover-letters-text091">
              Educational background
            </span>
            <span className="cover-letters-text092">Achievements</span>
            <span className="cover-letters-text093">Contact information</span>
            <span className="cover-letters-text094">
              Resume summary or resume objective
            </span>
          </div>
          <img
            alt="image"
            src="/playground_assets/it_10_generated-removebg-preview-1400w.png"
            loading="lazy"
            className="cover-letters-image26"
          />
        </div>
        <div className="cover-letters-banner4">
          <img
            alt="image"
            src="/playground_assets/it_10_generated-removebg-preview-1400w.png"
            loading="lazy"
            className="cover-letters-image27"
          />
          <div className="cover-letters-container70">
            <h1 className="cover-letters-text095">
              What&apos;s the difference between a CV and a resume?
            </h1>
            <span className="cover-letters-text096">
              In the EU, the words &quot;CV&quot; and &quot;resume&quot; are
              used interchangeably
            </span>
            <span className="cover-letters-text097">
              In the United States, however, a resume is a document you use to
              apply for jobs, while a CV is mainly used by academics.
            </span>
            <span className="cover-letters-text098">
              Want to learn more? Check out our article on the differences
              between CVs and resumes.
            </span>
          </div>
        </div>
        <div className="cover-letters-banner5">
          <div className="cover-letters-container71">
            <h1 className="cover-letters-text099">
              How can I create my resume?
            </h1>
            <span className="cover-letters-text100">
              Making a resume with Perfect Resume is very straightforward.
            </span>
            <span className="cover-letters-text101">
              Just pick one of our professional resume templates.
            </span>
            <span className="cover-letters-text102">
              Then, you’ll be forwarded to our resume builder, where all you
              have to do is fill in your resume content!
            </span>
          </div>
          <img
            alt="image"
            src="/playground_assets/it_10_generated-removebg-preview-1400w.png"
            loading="lazy"
            className="cover-letters-image28"
          />
        </div>
        <div className="cover-letters-banner6">
          <img
            alt="image"
            src="/playground_assets/it_10_generated-removebg-preview-1400w.png"
            loading="lazy"
            className="cover-letters-image29"
          />
          <div className="cover-letters-container72">
            <h1 className="cover-letters-text103">
              What should a resume include?
            </h1>
            <span className="cover-letters-text104">
              The must-have contents in your resume include the following
              sections:
            </span>
            <span className="cover-letters-text105">Work Experience</span>
            <span className="cover-letters-text106">
              Educational Background
            </span>
            <span className="cover-letters-text107">Contact Information</span>
            <span className="cover-letters-text108">
              Resume summary or Resume Objective
            </span>
            <span className="cover-letters-text109">
              The optional ones are:
            </span>
            <span className="cover-letters-text110">
              Hobbies &amp; Interests
            </span>
            <span className="cover-letters-text111">Skills</span>
            <span className="cover-letters-text112">
              Volunteering Experience
            </span>
          </div>
        </div>
      </div>
      <div className="cover-letters-container73">
        <h2 className="cover-letters-text113">Cover Letter Templates FAQ?</h2>
        <div className="cover-letters-line35"></div>
        <div className="cover-letters-container74">
          <div className="cover-letters-container75">
            <div className="cover-letters-container76">
              <h1 className="cover-letters-text114">
                How to Make a Simple Cover Letter for Your Resume?
              </h1>
              <span className="cover-letters-text115">
                <span>
                  Simply pick one of our 12 cover letter templates above to get
                  started.
                </span>
                <br className="cover-letters-text117"></br>
                <br className="cover-letters-text118"></br>
                <span>
                  We’d recommend matching your cover letter template to the
                  resume template you picked.
                </span>
              </span>
            </div>
            <div className="cover-letters-container77">
              <h1 className="cover-letters-text120">
                What is the Best Cover Letter Template?
              </h1>
              <span className="cover-letters-text121">
                <span>
                  There’s no such thing as the “best cover letter template.”
                  After all, every single recruiter has their own personal
                  taste. Some might like a shiny &amp; flashy cover letter
                  template, while others might think it’s tacky.
                </span>
                <br></br>
                <br></br>
                <span>
                  As a rule of thumb, though, we usually recommend customizing
                  each cover letter for the company you’re sending it to.
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="cover-letters-social-bar">
        <svg
          viewBox="0 0 950.8571428571428 1024"
          className="cover-letters-icon04"
        >
          <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
        </svg>
        <svg
          viewBox="0 0 877.7142857142857 1024"
          className="cover-letters-icon06"
        >
          <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
        </svg>
        <svg
          viewBox="0 0 602.2582857142856 1024"
          className="cover-letters-icon08"
        >
          <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
        </svg>
        <svg
          viewBox="0 0 877.7142857142857 1024"
          className="cover-letters-icon10"
        >
          <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="cover-letters-icon12">
          <path d="M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z"></path>
        </svg>
      </div>
      <footer className="cover-letters-footer">
        <div className="cover-letters-links-container">
          <div className="cover-letters-container78">
            <div className="cover-letters-container79">
              <span className="cover-letters-text126">Perfect Resume</span>
              <span className="cover-letters-text127">Homepage</span>
              <span className="cover-letters-text128">Resume Templates</span>
              <span className="cover-letters-text129">CV Templates</span>
              <span className="cover-letters-text130">Cover Letters</span>
            </div>
            <div className="cover-letters-container80">
              <span className="cover-letters-text131">Learn</span>
              <span className="cover-letters-text132">Career Blog</span>
              <span className="cover-letters-text133">
                How to Write a Resume
              </span>
              <span className="cover-letters-text134">How to Write CV</span>
              <span className="cover-letters-text135">
                How to Write a Cover Letter
              </span>
              <span className="cover-letters-text136">Resume Examples</span>
              <span className="cover-letters-text137">
                Cover Letter Examples
              </span>
            </div>
          </div>
          <div className="cover-letters-container81">
            <div className="cover-letters-container82">
              <span className="cover-letters-text138">Other</span>
              <span className="cover-letters-text139">Pricing</span>
              <span className="cover-letters-text140">About Us</span>
              <span className="cover-letters-text141">
                E-book: How to get a job in 2022
              </span>
              <span className="cover-letters-text142">Media Kit</span>
              <span className="cover-letters-text143">Help Center</span>
            </div>
            <div className="cover-letters-container83">
              <span className="cover-letters-text144">Resources</span>
              <span className="cover-letters-text145">Terms of Use</span>
              <span className="cover-letters-text146">Privacy Policy</span>
              <span className="cover-letters-text147">Cookie Policy</span>
              <span className="cover-letters-text148">
                contact@perfectresume.com
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default CoverLetters
