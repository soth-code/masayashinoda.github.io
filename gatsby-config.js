module.exports = {
  siteMetadata: {
    title: `Masaya Shida`,
    description: `Web & graphics designer based in Phnom Penh, Cambodia.`,
    author: `Masaya Shinoda`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Masaya Portfolio`,
        short_name: `Masaya Portfolio`,
        start_url: `/`,
        background_color: `#183152`,
        theme_color: `#244979`,
        display: `Masaya Shida`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
