import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import TestimonialCard3 from '../components/testimonial-card3'
import './home.css'

const Home = (props) => {
  return (
    <header className="home-container">
      <Helmet>
        <title>Perfect Resume</title>
        <meta property="og:title" content="Perfect Resume" />
      </Helmet>
      <header data-thq="thq-navbar" className="home-navbar-interactive">
        <Link to="/" className="home-navlink">
          <img
            alt="logo"
            src="/playground_assets/perfect%20resume-03-1500h.png"
            className="home-logo"
          />
        </Link>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="home-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="home-nav"
          >
            <Link to="/resume-templates" className="home-navlink1">
              Resume Templates
            </Link>
            <Link to="/c-v-templates" className="home-navlink2">
              CV Templates
            </Link>
            <Link to="/cover-letters" className="home-navlink3">
              Cover Letters
            </Link>
            <Link to="/pricing" className="home-navlink4">
              Pricing
            </Link>
          </nav>
        </div>
        <div data-thq="thq-navbar-btn-group" className="home-btn-group">
          <Link to="/register" className="home-register">
            Register
          </Link>
          <Link to="/login" className="home-login">
            Sign In
          </Link>
        </div>
        <div data-thq="thq-burger-menu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="home-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="home-nav1"
          >
            <div className="home-container01">
              <Link to="/" className="home-navlink5">
                <img
                  src="/playground_assets/perfect%20resume-03-1500h.png"
                  className="home-image"
                />
              </Link>
              <div data-thq="thq-close-menu" className="home-menu-close">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="home-nav2"
            >
              <Link to="/resume-templates" className="home-text">
                Resume Templates
              </Link>
              <Link to="/c-v-templates" className="home-navlink6">
                CV Templates
              </Link>
              <Link to="/cover-letters" className="home-navlink7">
                Cover Letters
              </Link>
              <Link to="/pricing" className="home-navlink8">
                Pricing
              </Link>
            </nav>
            <div className="home-container02">
              <Link to="/register" className="home-register1 Content">
                Register
              </Link>
              <Link to="/login" className="home-login1 Content">
                Sign In
              </Link>
            </div>
          </div>
          <div className="home-icon-group">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="home-undrawmobileloginikmv-element-card-info-card-medium-icon">
        <div className="home-undrawmobileloginikmv">
          <img
            alt="image"
            src="/playground_assets/main-removebg-preview%20%5B1%5D-800w.png"
            className="home-image01"
          />
        </div>
        <div className="home-container03">
          <h1 className="home-text001">
            <span>
              The online resume builder getting folks hired by BBC, Google,
              Apple, Tesla, and Airbnb.
            </span>
            <br></br>
            <br></br>
          </h1>
          <span className="home-text005">
            Build your brand-new resume in as little as 5 minutes.
          </span>
          <span className="home-text006">Try it for free.</span>
          <button className="home-register2">Get Started Now</button>
          <span className="home-text007">No credit card required</span>
          <div className="home-container04">
            <img
              alt="image"
              src="/playground_assets/resummee-removebg-preview-600w.png"
              className="home-image02"
            />
          </div>
        </div>
      </div>
      <div className="home-testimonial">
        <h1 className="home-text008">
          Our Users Are Being Hired at the World&apos;s Leading Companies.
        </h1>
        <div className="home-line3"></div>
        <div className="home-container05">
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
      <div className="home-container06">
        <img
          alt="image"
          src="/playground_assets/it_10_generated-removebg-preview-1400w.png"
          className="home-image03"
        />
        <div className="home-container07">
          <div className="home-container08">
            <h1 className="home-text009">
              Recruiters Love Our Resume Builder. Learn Why Below.
            </h1>
          </div>
        </div>
      </div>
      <div className="home-container09">
        <div className="home-container10"></div>
        <h2 className="home-text010">
          Resume Templates for Every Career Path.
        </h2>
        <div className="home-line31"></div>
        <h2 className="home-text011">
          You can pick one of our handcrafted resume templates above. You can
          start building your resume in less than 5 seconds, using predefined
          sections approved by recruiters worldwide. You can also customize it
          to your own needs and personality and hit &apos;Download&apos;.
          It&apos;s THAT easy to use, even if you&apos;ve never made a resume in
          your life before!
        </h2>
        <div className="home-container11">
          <div className="home-container12">
            <img
              alt="image"
              src="/playground_assets/cv%20template-1400w.png"
              className="home-image04"
            />
            <div className="home-container13">
              <span className="home-text012">Creative Resume Template</span>
              <span className="home-text013">
                A resume template as creative as your imagination
              </span>
            </div>
          </div>
          <div className="home-container14">
            <img
              alt="image"
              src="/playground_assets/resume%20template-1200w.png"
              className="home-image05"
            />
            <div className="home-container15">
              <span className="home-text014">Creative Resume Template</span>
              <span className="home-text015">
                A resume template as creative as your imagination
              </span>
            </div>
          </div>
          <div className="home-container16">
            <img
              alt="image"
              src="/playground_assets/cv%20template-1400w.png"
              className="home-image06"
            />
            <div className="home-container17">
              <span className="home-text016">Creative Resume Template</span>
              <span className="home-text017">
                A resume template as creative as your imagination
              </span>
            </div>
          </div>
        </div>
        <button className="home-register3">
          Discover More Resume Templates
        </button>
      </div>
      <h2 className="home-text018">Build Your Resume Fast and Easy.</h2>
      <div className="home-line32"></div>
      <h2 className="home-text019 Content">
        Smart resume is lightning fast. There&apos;s no software to download. No
        multi-part sign-up form. No long-winded tutorials. Just a
        straightforward process.
      </h2>
      <div className="home-hero">
        <div className="home-container18">
          <div className="home-container19">
            <h1 className="home-text020">1</h1>
          </div>
          <div className="home-container20">
            <h1 className="home-text021">Pick a Template</h1>
            <span className="home-text022">
              Don&apos;t sabotage your job search before it has even begun.
              Choose from our ATS-friendly, hand-crafted resume templates
            </span>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/vecteezy_illustration-vector-graphic-cartoon-character-of-business_5962344-1400w.jpg"
          className="home-image07"
        />
      </div>
      <div className="home-hero1">
        <img
          alt="image"
          src="/playground_assets/vecteezy_illustration-vector-graphic-cartoon-character-of-business_5962344-1400w.jpg"
          className="home-image08"
        />
        <div className="home-container21">
          <div className="home-container22">
            <h1 className="home-text023">2</h1>
          </div>
          <div className="home-container23">
            <h1 className="home-text024">Customize Your Layout</h1>
            <span className="home-text025">
              Don&apos;t sabotage your job search before it has even begun.
              Choose from our ATS-friendly, hand-crafted resume templates
            </span>
          </div>
        </div>
      </div>
      <div className="home-hero2">
        <div className="home-container24">
          <div className="home-container25">
            <h1 className="home-text026">3</h1>
          </div>
          <div className="home-container26">
            <h1 className="home-text027">Fill in the Blanks</h1>
            <span className="home-text028">
              Fill in your resume information, let our AI content analyzer do
              its job, and see your resume changes dynamically in real time.
            </span>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/vecteezy_illustration-vector-graphic-cartoon-character-of-business_5962344-1400w.jpg"
          className="home-image09"
        />
      </div>
      <div className="home-hero3">
        <img
          alt="image"
          src="/playground_assets/vecteezy_illustration-vector-graphic-cartoon-character-of-business_5962344-1400w.jpg"
          className="home-image10"
        />
        <div className="home-container27">
          <div className="home-container28">
            <h1 className="home-text029">
              <span>4</span>
              <br></br>
              <br></br>
            </h1>
          </div>
          <div className="home-container29">
            <h1 className="home-text033">Hit &apos;Download!&apos;</h1>
            <span className="home-text034">
              And yes, it&apos;s free! We don&apos;t hit you with a paywall once
              you&apos;ve completed your resume in the Basic Account. If you use
              any of our premium features, the software will let you know about
              it.
            </span>
          </div>
        </div>
      </div>
      <div className="home-blog">
        <h1 className="home-text035">Why Use The Smart Resume Builder?</h1>
        <div className="home-line33"></div>
        <div className="home-listing">
          <div className="home-component-content-blog-example">
            <div className="home-container30">
              <img
                alt="image"
                src="/playground_assets/ecommerce__554_-removebg-preview-200h.png"
                className="home-image11"
              />
              <div className="home-container31">
                <h1 className="home-text036">Free AND Premium</h1>
                <span className="home-text037">
                  We offer both free and premium features. Want your resume to
                  have that extra punch? Upgrade to Premium. On a budget?
                  That&apos;s OK too - you can use our resume buider completely
                  free of charge.
                </span>
              </div>
            </div>
            <div className="home-container32">
              <img
                alt="image"
                src="/playground_assets/men-removebg-preview-200h.png"
                className="home-image12"
              />
              <div className="home-container33">
                <h1 className="home-text038">
                  Creative and Professional Resume Templates
                </h1>
                <span className="home-text039">
                  Whatever resume template you&apos;re looking for, we&apos;ve
                  got it! Whether it&apos;s a classic black-and-white template,
                  or something a bit more outside the box, we have what you
                  need!
                </span>
              </div>
            </div>
          </div>
          <div className="home-component-content-blog-example1">
            <div className="home-container34">
              <img
                alt="image"
                src="/playground_assets/men-removebg-preview-200h.png"
                className="home-image13"
              />
              <div className="home-container35">
                <h1 className="home-text040">NO Hidden Fees</h1>
                <span className="home-text041">
                  With Perfect Resume, you won’t spend hours working on your
                  resume, just to be hit with a hidden paywall. Our resume
                  builder will notify you if you’re using any of our premium
                  features in advance.
                </span>
              </div>
            </div>
            <div className="home-container36">
              <img
                alt="image"
                src="/playground_assets/ecommerce__554_-removebg-preview-200h.png"
                className="home-image14"
              />
              <div className="home-container37">
                <h1 className="home-text042">ATS-Friendly</h1>
                <span className="home-text043">
                  Our resume templates are ATS-friendly. It means your resume
                  won’t automatically be rejected because an ATS can’t read it.
                </span>
              </div>
            </div>
          </div>
          <div className="home-component-content-blog-example2">
            <div className="home-container38">
              <img
                alt="image"
                src="/playground_assets/ecommerce__554_-removebg-preview-200h.png"
                className="home-image15"
              />
              <div className="home-container39">
                <h1 className="home-text044">Live Content Feedback</h1>
                <span className="home-text045">
                  Our CV builder provides real-time feedback on your resume
                  content, ensuring that your resume reaches its full potential!
                </span>
              </div>
            </div>
            <div className="home-container40">
              <img
                alt="image"
                src="/playground_assets/men-removebg-preview-200h.png"
                className="home-image16"
              />
              <div className="home-container41">
                <h1 className="home-text046">Edit Your Resume in Real Time</h1>
                <span className="home-text047">
                  As you edit your resume with our builder, you’ll immediately
                  see the changes applied to your document.
                </span>
              </div>
            </div>
          </div>
          <button className="home-register4">Try it Out Yourself</button>
        </div>
      </div>
      <div className="home-container42">
        <div className="home-container43">
          <div className="home-container44">
            <div className="home-container45"></div>
            <h2 className="home-text048">
              Premium Features for Ambitious Job-Seekers
            </h2>
            <div className="home-line34"></div>
            <span className="home-text049">
              <span className="Content">
                The job market today is competitive – you’ll need every edge to
                stand out. Here’s how
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                Perfect Resume
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="Content">Premium can help you:</span>
            </span>
            <div className="home-pricing">
              <div className="home-container46">
                <div className="home-container47">
                  <div className="home-group9">
                    <div className="home-container48">
                      <img
                        alt="image"
                        src="/playground_assets/cv%20template-1400w.png"
                        className="home-image17"
                      />
                      <div className="home-container49">
                        <span className="home-text053">
                          Unlimited Design Options
                        </span>
                        <span className="home-text054">
                          Make your resume truly yours by customizing its
                          design, layout, and much more.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="home-group91">
                    <div className="home-container50">
                      <img
                        alt="image"
                        src="/playground_assets/resume%20template-1200w.png"
                        className="home-image18"
                      />
                      <div className="home-container51">
                        <span className="home-text055">
                          Cover Letter Templates
                        </span>
                        <span className="home-text056">
                          Want your application to stand out from the rest?
                          Create a matching cover letter for your resume and
                          impress the hiring manager.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="home-register5">
              Discover More Resume Templates
            </button>
          </div>
        </div>
      </div>
      <div className="home-blog1">
        <h1 className="home-text057">
          Smart Resume Users Love Our Resume Builder.
        </h1>
        <div className="home-line35"></div>
        <div className="home-listing1">
          <div className="home-component-content-blog-example3">
            <div className="home-container52">
              <div className="home-container53">
                <h1 className="home-text058">Good excited</h1>
                <span className="home-text059">Good excited</span>
                <span className="home-text060">Hamza Bhatti, August 14</span>
              </div>
              <div className="home-container54">
                <h1 className="home-text061">Wonderful</h1>
                <span className="home-text062">
                  Wonderful. Get a career build guide. Passed 10 interviews
                  passed and hired
                </span>
                <span className="home-text063">Olha Nesterenko, August 5</span>
              </div>
            </div>
          </div>
          <span className="home-text064">
            Showing our 4 &amp; 5 star reviews
          </span>
        </div>
      </div>
      <div className="home-container55">
        <img
          alt="image"
          src="/playground_assets/backk-1500w.png"
          className="home-image19"
        />
      </div>
      <div className="home-container56">
        <img
          alt="image"
          src="/playground_assets/persons-removebg-preview-600w.png"
          className="home-image20"
        />
      </div>
      <div className="home-container57">
        <div className="home-container58">
          <h1 className="home-text065">Resume Builder FAQ.</h1>
          <div className="home-line36"></div>
        </div>
        <div className="home-banner">
          <img
            alt="image"
            src="/playground_assets/it_10_generated-removebg-preview-1400w.png"
            loading="lazy"
            className="home-image21"
          />
          <div className="home-container59">
            <h1 className="home-text066">Why should I use a resume builder?</h1>
            <span>
              Using a resume builder makes the process of creating a resume
              significantly faster and easier. Ever tried building your resume
              with Word?
            </span>
            <span className="home-text068">
              The whole process is a huge pain – you make a TINY change to your
              resume, and the entire resume layout gets completely messed up.
            </span>
            <span className="home-text069">
              With a resume builder, you don’t have to worry about the nitty
              gritty of resume creation, like font selection, layout,
              formatting, etc.
            </span>
            <span className="home-text070">
              All you have to do is pick a resume template, fill it in, and then
              you’re ready to start applying for jobs!
            </span>
          </div>
        </div>
        <div className="home-banner1">
          <div className="home-container60">
            <h1 className="home-text071">What is the best resume builder?</h1>
            <span>
              Over the past 7 years, we’ve been working hard to make Perfect
              Resume the best resume builder out there.
            </span>
            <span className="home-text073">
              And we’d say we succeeded! Here’s what sets us apart from the rest
              of the competition:
            </span>
            <span className="home-text074">
              Easy to Use - Our builder is very easy to use, even if you&apos;re
              not too tech-friendly.
            </span>
            <span className="home-text075">
              Get Started in under 5 Minutes - Just pick one of our resume
              templates, and you&apos;re good to go!
            </span>
            <span className="home-text076">
              It&apos;s 100% free - Some resume builders out there pretend to be
              free… and then they hit you with a paywall once you’re done
              writing your resume! We don’t do that. Our builder will instantly
              notify you if you’re using any of our premium features.
            </span>
            <span className="home-text077">
              Cover Letter Builder - If you’re using Perfect Resume Premium, you
              gain access to our cover letter builder for free (including
              matching cover letter templates).
            </span>
            <span className="home-text078">
              Tons of Customization and Design Options - Our builder offers a
              ton of customization. You can make changes to the layout, color
              schemes, and much more.
            </span>
            <span className="home-text079">
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
            className="home-image22"
          />
        </div>
        <div className="home-banner2">
          <img
            alt="image"
            src="/playground_assets/it_10_generated-removebg-preview-1400w.png"
            loading="lazy"
            className="home-image23"
          />
          <div className="home-container61">
            <h1 className="home-text080">
              Is this a completely free resume builder?
            </h1>
            <span>Yes, Perfect Resume is a 100% free resume builder.</span>
            <span className="home-text082">
              If you’re on a budget, you can use it to create your resume
              completely free of charge. And no, unlike some other resume
              builders out there, we don’t hit you with a paywall once you’ve
              completed your resume.
            </span>
            <span className="home-text083">
              If you use any of our premium features, the software will let you
              know about it. It will then ask if you did it accidentally, or if
              you would like to upgrade to Perfect Resume Premium. You&apos;re
              in control!
            </span>
          </div>
        </div>
        <div className="home-banner3">
          <div className="home-container62">
            <h1 className="home-text084">What is a resume?</h1>
            <span className="home-text085">
              A resume (also known as a CV, or curriculum vitae) is a 1-2 page
              document that summarizes your work experience and career history.
            </span>
            <span className="home-text086">
              It usually includes information about the following:
            </span>
            <span className="home-text087">Your work history</span>
            <span className="home-text088">Educational background</span>
            <span className="home-text089">Achievements</span>
            <span className="home-text090">Contact information</span>
            <span className="home-text091">
              Resume summary or resume objective
            </span>
          </div>
          <img
            alt="image"
            src="/playground_assets/it_10_generated-removebg-preview-1400w.png"
            loading="lazy"
            className="home-image24"
          />
        </div>
        <div className="home-banner4">
          <img
            alt="image"
            src="/playground_assets/it_10_generated-removebg-preview-1400w.png"
            loading="lazy"
            className="home-image25"
          />
          <div className="home-container63">
            <h1 className="home-text092">
              What&apos;s the difference between a CV and a resume?
            </h1>
            <span className="home-text093">
              In the EU, the words &quot;CV&quot; and &quot;resume&quot; are
              used interchangeably
            </span>
            <span className="home-text094">
              In the United States, however, a resume is a document you use to
              apply for jobs, while a CV is mainly used by academics.
            </span>
            <span className="home-text095">
              Want to learn more? Check out our article on the differences
              between CVs and resumes.
            </span>
          </div>
        </div>
        <div className="home-banner5">
          <div className="home-container64">
            <h1 className="home-text096">How can I create my resume?</h1>
            <span className="home-text097">
              Making a resume with Perfect Resume is very straightforward.
            </span>
            <span className="home-text098">
              Just pick one of our professional resume templates.
            </span>
            <span className="home-text099">
              Then, you’ll be forwarded to our resume builder, where all you
              have to do is fill in your resume content!
            </span>
          </div>
          <img
            alt="image"
            src="/playground_assets/it_10_generated-removebg-preview-1400w.png"
            loading="lazy"
            className="home-image26"
          />
        </div>
        <div className="home-banner6">
          <img
            alt="image"
            src="/playground_assets/it_10_generated-removebg-preview-1400w.png"
            loading="lazy"
            className="home-image27"
          />
          <div className="home-container65">
            <h1 className="home-text100">What should a resume include?</h1>
            <span>
              The must-have contents in your resume include the following
              sections:
            </span>
            <span className="home-text102">Work Experience</span>
            <span className="home-text103">Educational Background</span>
            <span className="home-text104">Contact Information</span>
            <span className="home-text105">
              Resume summary or Resume Objective
            </span>
            <span className="home-text106">The optional ones are:</span>
            <span className="home-text107">Hobbies &amp; Interests</span>
            <span className="home-text108">Skills</span>
            <span className="home-text109">Volunteering Experience</span>
          </div>
        </div>
      </div>
      <div className="home-container66">
        <div className="home-container67"></div>
        <h2 className="home-text110">Ready to Jump-Start Your Career</h2>
        <div className="home-line37"></div>
        <span className="home-text111">
          <span className="Content">
            The job market today is competitive – you’ll need every edge to
            stand out. Here’s how
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            Perfect Resume
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="Content">Premium can help you:</span>
        </span>
        <button className="home-register6">Get Started Now</button>
      </div>
      <div className="home-social-bar">
        <svg viewBox="0 0 950.8571428571428 1024" className="home-icon10">
          <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
        </svg>
        <svg viewBox="0 0 877.7142857142857 1024" className="home-icon12">
          <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
        </svg>
        <svg viewBox="0 0 602.2582857142856 1024" className="home-icon14">
          <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
        </svg>
        <svg viewBox="0 0 877.7142857142857 1024" className="home-icon16">
          <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="home-icon18">
          <path d="M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z"></path>
        </svg>
      </div>
      <footer className="home-footer">
        <div className="home-links-container">
          <div className="home-container68">
            <div className="home-container69">
              <span className="home-text115">Perfect Resume</span>
              <span className="home-text116">Homepage</span>
              <span className="home-text117">Resume Templates</span>
              <span className="home-text118">CV Templates</span>
              <span className="home-text119">Cover Letters</span>
            </div>
            <div className="home-container70">
              <span className="home-text120">Learn</span>
              <span className="home-text121">Career Blog</span>
              <span className="home-text122">How to Write a Resume</span>
              <span className="home-text123">How to Write CV</span>
              <span className="home-text124">How to Write a Cover Letter</span>
              <span className="home-text125">Resume Examples</span>
              <span className="home-text126">Cover Letter Examples</span>
            </div>
          </div>
          <div className="home-container71">
            <div className="home-container72">
              <span className="home-text127">Other</span>
              <span className="home-text128">Pricing</span>
              <span className="home-text129">About Us</span>
              <span className="home-text130">
                E-book: How to get a job in 2022
              </span>
              <span className="home-text131">Media Kit</span>
              <span className="home-text132">Help Center</span>
            </div>
            <div className="home-container73">
              <span className="home-text133">Resources</span>
              <span className="home-text134">Terms of Use</span>
              <span className="home-text135">Privacy Policy</span>
              <span className="home-text136">Cookie Policy</span>
              <span className="home-text137">contact@perfectresume.com</span>
            </div>
          </div>
        </div>
      </footer>
    </header>
  )
}

export default Home
