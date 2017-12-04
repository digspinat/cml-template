import React from "react"
import style from "./template.css";

export default ({ data }) => {
  const manual = data.markdownRemark
  return (
      <div style={{ backgroundColor: "#285DAB", height: `582px`,maxWidth: "450px", margin: '0 auto', paddingLeft: `30px`, paddingRight: `30px`, paddingTop: `20px`}}>
        <div>
          <p style={{ fontSize: `50px`, color: "white", fontFamily: "Times New Roman" }}>{manual.frontmatter.brand}&nbsp;<img src={manual.frontmatter.logo} style={{ height: `65px`, width: `67px`, verticalAlign: `middle` }} /></p>
          <p style={{ fontSize: `20px`, fontWeight: `bold`, marginTop: `-30px`, color: "white" }}>{manual.frontmatter.series}</p>
          <p style={{ fontSize: `20px`, fontWeight: `bold`, marginTop: `-10px`, color: "white" }}>{manual.frontmatter.year}</p>
          <h1 style={{ marginTop: `-10px`, color: "#00B900" }}>{manual.frontmatter.manual1}</h1>
          <h1 style={{ marginTop: `-10px`, color: "#00B900" }}>{manual.frontmatter.manual2}</h1>
          <img src={manual.frontmatter.carimage} width="448px" height="230px"/>
          <p style={{ color: "#CCCCCC", textAlign: `right` }}>{manual.frontmatter.downloadid}</p>
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
