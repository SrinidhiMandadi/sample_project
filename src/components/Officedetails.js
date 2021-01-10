import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

const Officedetails = props => { 
  const data = useStaticQuery(graphql`
    query OfficedetailsQuery {
      allOfficedetailsJson {
        edges {
          node {
            name
            image
            link 
            description
          }
        }
      }
    }
  `);
  return (
    <div className="officedetails">
      {data.allOfficedetailsJson.edges.map(({ node }) => (
        <a key={node.name} href={node.link} target="blank"><img src={node.image} title={node.name} alt={node.name}/>
         <h5>{node.description}</h5></a> 
      ))}
    </div>
  );
};

export default Officedetails;
