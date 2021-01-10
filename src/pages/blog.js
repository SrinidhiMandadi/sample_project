import React from 'react';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, graphql } from 'gatsby';


const Blog = props => {
        const blog = props.data.blog.edges;
        const { intro } = props.data;
       
    return (
        <Layout bodyClass="page-services">
        <SEO title="blog" />
        <div className="intro">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-12 col-md-7 col-lg-6 order-2 order-md-1">
              <div dangerouslySetInnerHTML={{ __html: intro.html }} />
            </div>
          </div>
        </div>
     </div>
     
      </Layout>
    );
};
export const query = graphql`
query BlogQuery {
    blog: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog\/.*/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    intro: markdownRemark(fileAbsolutePath: {regex: "/(blog.md)/"}) {
      html
      frontmatter {
        title
        image
        intro_image
        intro_image_absolute
        intro_image_hide_on_mobile
      }
    }
  }
`;
export default Blog;

        