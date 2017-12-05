import React from "react"
import style from "./template.css";

export default ({ data }) => {
  const manual = data.markdownRemark
  return (
      <div style={{ backgroundColor: "#285DAB", padding: "80px"}}>
        <div>
          <p style={{ fontSize: `150px`, color: "white", fontFamily: "Times New Roman" }}>{manual.frontmatter.brand}&nbsp;<img src={manual.frontmatter.logo} style={{ height: `200px`, width: `200px`, verticalAlign: `middle` }} /></p>
          <p style={{ fontSize: `100px`, fontWeight: `bold`, marginTop: `-100px`, color: "white" }}>{manual.frontmatter.series}</p>
          <p style={{ fontSize: `100px`, fontWeight: `bold`, marginTop: `-50px`, color: "white" }}>{manual.frontmatter.year}</p>
          <h1 style={{ fontSize: `80px`, marginTop: `-50px`, color: "#00B900" }}>{manual.frontmatter.manual1}</h1>
          <h1 style={{ fontSize: `80px`, marginTop: `-50px`, color: "#00B900" }}>{manual.frontmatter.manual2}</h1>
          <img src={manual.frontmatter.carimage} height="854px" width="850px"/>
          <p style={{ fontSize: `50px`, color: "#CCCCCC", textAlign: `right` }}>{manual.frontmatter.downloadid}</p>
        </div>
      </div>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
          title
          sku
          template
          name
          brand
          logo
          series
          year
          manual1
          manual2
          carimage
          downloadid
      }
    }
  }`;
