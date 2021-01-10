import React from 'react';
import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Carousel, CarouselItem } from 'react-bootstrap';
import Img from "gatsby-image"
 import expert from"../images/team.png"
 import Social from '../components/Social.js';
 import Officedetails from '../components/Officedetails.js';

 

 import twitter from"../../static/images/social/twitter.svg"
 import facebook from"../../static/images/social/facebook.svg"
 import instagram from"../../static/images/social/instagram.svg"


  import phone from"../images/footericons/phone.svg"
  import email from"../images/footericons/email.svg"
  import location from"../images/footericons/location.svg"



const Home = props => {
  const aboutus = props.data.aboutus;
  const slider = props.data.slider;
  const mission = props.data.mission;
  const contactus = props.data.contactus;
  const map = props.data.map;
  const site = props.data.site.siteMetadata;
  const services = props.data.services.edges;
  const features = props.data.features.edges;
//   const introImageClasses = `intro-image ${intro.frontmatter.intro_image_absolute && 'intro-image-absolute'} ${intro.frontmatter.intro_image_hide_on_mobile && 'intro-image-hide-mobile'}`;

  return (
           <Layout bodyClass="page-home">
       <SEO title={site.title} />
       {/* <Helmet>
         <meta 
           name="description"
           content="Small Business Theme. Multiple content types using Markdown and JSON sources. Responsive design and SCSS. This is a beautiful and artfully designed starting theme."
         />
       </Helmet> */}
       <div>
        <Carousel>
            <CarouselItem>
                <Img fluid ={props.data.slide01.childImageSharp.fluid} alt="this is my first slide"/>
            </CarouselItem>
            <CarouselItem>
                <Img fluid ={props.data.slide02.childImageSharp.fluid} alt="this is my second slide"/>
            </CarouselItem>
            <CarouselItem>
                <Img fluid ={props.data.slide03.childImageSharp.fluid} alt="this is my third slide"/>
            </CarouselItem>
        </Carousel>

        <div class="about-section"> 
             <div dangerouslySetInnerHTML={{ __html: slider.html }} /> 
        </div>
        <div class="about-boxes">
        <div class="about-box-item" id="about-box-1">
            <h1>Home</h1>
            <h2>Waste Pickup</h2>
        </div>
        <div class="about-box-item" id="about-box-2">
            <h1>Corporate</h1>
            <h2>Waste Pickup</h2>
        </div>
    </div> 
    </div>
    <div class="about-container">
          <h1>About Us</h1>
               <div  dangerouslySetInnerHTML={{ __html: aboutus.html }} /> 
              </div> 
    {/* //mission----------------------------------------------------------------------- */}

    <div class="mission-container">
        <h1>Our mission</h1>
            <div dangerouslySetInnerHTML={{ __html: mission.html }} /> 
              <button>MORE ABOUT US</button>
    </div>
{/* // team................................................................................... */}
     <div class="expert-container">
        <h1>Reach out to our WM Experts</h1>
        <div class="expert-boxes">
     {/* //1expert ................................................. */}
            <div class="expert-box-item">
                <div class="expert-box-top">
                    <div class="expert-img">
                    <img src={expert} alt="expert1"/>
                           <div class="expert-links" styles="display: none;" >

                      <div class="expert-link-items">
                          <a href="https://twitter.com/" target="_blank">
                            <img src={twitter} alt="ex1" height="30px" width="30px"  align-items="center"/>
                           </a> 
                      </div>
                            
                      <div class="expert-link-items">
                          <a href="https://www.instagram.com/" target="_blank">
                            <img src={instagram} alt="ex1" height="30px" width="30px"  align-items="center"/>
                            </a>
                      </div>

                      <div class="expert-link-items">
                          <a href="https://www.facebook.com/" target="_blank">
                            <img src={facebook} alt="ex1" height="30px" width="30px"  align-items="center"/>                                </a>
                      </div>

             </div> 
               </div>
                    <div class="expert-details"> 
                        <h3>Lorem, ipsum</h3>
                        <h4>VOLUNTEER</h4>
                    </div>
                </div>
                <div class="expert-box-bottom">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus eos amet libero, facere
                        repellat earum expedita quasi suscipit optio eaque maiores modi vel.
                    </p>
                </div>
            </div>
 {/*//2expert...................................................................        */}
            <div class="expert-box-item" id="expert-box-1" onmouseover="showLinks(this)" onmouseout="hideLinks(this)">
                <div class="expert-box-top">
                    <div class="expert-img">
                    <img src={expert} alt="expert1"/>
                        <div class="expert-links" >
                           
                        <div class="expert-link-items">
                          <a href="https://twitter.com/" target="_blank">
                            <img src={twitter} alt="ex1" height="30px" width="30px"  align-items="center"/>
                           </a> 
                      </div>
                            
                      <div class="expert-link-items">
                          <a href="https://www.instagram.com/" target="_blank">
                            <img src={instagram} alt="ex1" height="30px" width="30px"  align-items="center"/>
                            </a>
                      </div>

                      <div class="expert-link-items">
                          <a href="https://www.facebook.com/" target="_blank">
                            <img src={facebook} alt="ex1" height="30px" width="30px"  align-items="center"/>                                </a>
                      </div>

                        </div> 
                    </div>
                    <div class="expert-details"> 
                        <h3>Lorem, ipsum</h3>
                        <h4>VOLUNTEER</h4>
                    </div>
                </div>
                <div class="expert-box-bottom">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus eos amet libero, facere
                        repellat earum expedita quasi suscipit optio eaque maiores modi vel.
                    </p>
                </div>
            </div>
   {/* //3expert.................................................          */}
            <div class="expert-box-item" id="expert-box-2" onmouseover="showLinks(this)" onmouseout="hideLinks(this)">
                <div class="expert-box-top">
                    <div class="expert-img">
                    <img src={expert} alt="expert3"/>
                              <div class="expert-links" styles="display: none;">

                            <div class="expert-link-items">
                          <a href="https://twitter.com/?lang=en" target="_blank">
                            <img src={twitter} alt="ex1" height="30px" width="30px"  align-items="center"/>
                           </a> 
                      </div>
                            
                      <div class="expert-link-items">
                          <a href="https://www.instagram.com/" target="_blank">
                            <img src={instagram} alt="ex1" height="30px" width="30px"  align-items="center"/>
                            </a>
                      </div>

                      <div class="expert-link-items">
                          <a href="https://www.facebook.com/" target="_blank">
                            <img src={facebook} alt="ex1" height="30px" width="30px"  align-items="center"/>                                </a>
                      </div>

                        </div>
                    </div>
                    <div class="expert-details">
                        <h3>Lorem, ipsum</h3>
                        <h4>VOLUNTEER</h4>
                    </div>
                </div>
                <div class="expert-box-bottom">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis mollitia illo sequi corrupti
                        nisi fugit est? Minus minima animi ad. jsxb hdc ujwi iu swer aee rds.</p>
                </div>
            </div>
        </div>
    </div> 
 {/* //contact us----------------------------------------------------------------------------------------------*/}
    <div class="contact-container">
        <div class="contact-title">Contact Us</div>
        <div class="contact-body">
            <div class="contact-part" id="contact-info">
            <div dangerouslySetInnerHTML={{ __html: contactus.html }} />  {/*//contactus.md */}
            </div>
            <div class="contact-part" id="contact-img">
                <Img fluid ={props.data.contact.childImageSharp.fluid} alt="Contact Us"/>
            </div>
        </div>
    </div>
{/* map--------------------------------------------------------------------------------------- */}
     <div class="map-container">
         <div className="map">
             <div dangerouslySetInnerHTML={{ __html: map.html }} /> 
        </div>
    </div>
{/* //newsletter----------------------------------------------------------------------------------------- */}
    <div class="newsletter-container">
    <form action="/signup-news" method="post">
    <div class="column right">

        <h1 id="news">Be Future-Ready</h1>
        <h6>Get exclusive world digital marketing updates 
          straight to your inbox</h6>

                <input type="text" name="email" id="email" placeholder="Enter Your Email"/>
                <button type="submit">SIGN UP</button>

              </div>
                <div class="line">

                <div className="newsletter-container1">
                     <img src={phone} alt="icon2" height="60px" width="60px"  align-items="center"/>
                    <h6>+91 98765432</h6>
                </div>
 
            <div className="newsletter-container1">
                  <img src={email} alt="icon2" height="60px" width="60px"  align-items="center" />
                  {/* <a href="mailto:eternalrecycling@gmail.com" >eternalrecycling@gmail.com</a> */}
                  <h6>erecycling@gmail.com</h6>
            </div>

        <div className="newsletter-container1">
            <img src={location} alt="icon2" height="60px" width="60px"  align-items="center"/>
          <h6>Maheshwari Chambers, Raj Bhavan Quarters Colony, Somajiguda, Hyderabad, Telangana 500041, India</h6>
        </div>

    </div> 
  </form>
</div> 

    
   <br />
       </Layout>

   );
 };

 export const query = graphql`
   query {
    aboutus: markdownRemark(
      fileAbsolutePath: {regex: "/content/aboutus.md/"}
    ) {
        html
        frontmatter {
          image
          intro_image
          intro_image_absolute
          intro_image_hide_on_mobile
          title
        }
    }
    slide01: file(relativePath: { eq: "imgs-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    slide02: file(relativePath: { eq: "imgs-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      slide03: file(relativePath: { eq: "imgs-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      team1: file(relativePath: { eq: "team.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      contact: file(relativePath: { eq: "contact-img.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
     services: allMarkdownRemark(
       filter: { fileAbsolutePath: { regex: "/services\/.*/" } }
       sort: { fields: [frontmatter___weight], order: ASC }
       limit: 6
     ) {
       edges {
         node {
           id
           frontmatter {
             title
             date(formatString: "DD MMMM YYYY")
           }
           fields {
             slug
           }
           excerpt
         }
       }
     }
     slider: markdownRemark(
       fileAbsolutePath: {regex: "/content/slider.md/"}
     ) {
         html
         frontmatter {
           image
           intro_image
           intro_image_absolute
           intro_image_hide_on_mobile
           title
         }
     }
     mission: markdownRemark(
      fileAbsolutePath: {regex: "/content/our_mission.md/"}
    ) {
        html
        frontmatter {
          title
        }
    }
    contactus: markdownRemark(
      fileAbsolutePath: {regex: "/content/contactus.md/"}
    ) {
        html
        frontmatter {
          title
        }
    }
     map: markdownRemark(
      fileAbsolutePath: {regex: "/content/googlemap.md/"}
    ) {
        html
        frontmatter {
          title
        }
    }
     features: allFeaturesJson {
       edges {
         node {
           id
           title
           description
           image
         }
       }
     }
     site {
       siteMetadata {
         title
       }
     }
   }
`;

export default Home;
