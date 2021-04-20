export default {
  siteMetadata: {
    title: `Eat Like Slater`,
    siteUrl: `https://slaterslater.github.io/`,
    description: `Slater's Food Blog`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '216rhdvi',
        dataset: 'production',
        watchMode: true,
        token: process.env.GATSBY_SANITY_TOKEN,
      },
    },
  ],
};