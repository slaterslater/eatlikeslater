import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const SEO = ({title}) => {
  const { site } = useStaticQuery(query)
  const seo = site.siteMetadata
  return (
    <Helmet titleTemplate={`%s - ${seo.title}`}>
      <html lang="en" />
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={seo.description} />
      <title>{title || seo.title}</title>
    </Helmet>
  )
}

export default SEO

const query = graphql`
query {
  site {
    siteMetadata {
      description
      title
    }
  }
}
`