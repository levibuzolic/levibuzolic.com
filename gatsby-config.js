module.exports = {
  siteMetadata: {
    title: 'Gatsbygram',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/data`,
      },
    },

    // This plugin exposes helper functions for processing
    // images with the NPM package “sharp”. It's used by
    // several other plugins.
    'gatsby-plugin-sharp',

    // This plugin identifies file nodes that are images and
    // transforms these to create new “ImageSharp” nodes.
    // With them you can resize images and
    // generate responsive image thumbnails.
    'gatsby-transformer-sharp',

    // This plugin transforms JSON file nodes.
    'gatsby-transformer-json',

    // This plugin sets up the popular css-in-js library
    // Glamor. It handles adding a Babel plugin and webpack
    // configuration as well as setting up optimized server
    // rendering and client re-hydration.
    // 'gatsby-plugin-glamor',

    // This plugin takes your configuration and generates a
    // web manifest file so Gatsbygram can be added to your
    // homescreen on Android.
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'alt',
        short_name: 'alt',
        start_url: '/',
        background_color: '#f7f7f7',
        theme_color: '#191919',
        display: 'minimal-ui',
      },
    },

    // This plugin generates a service worker and AppShell
    // html file so the site works offline and is otherwise
    // resistant to bad networks. Works with almost any
    // site!
    'gatsby-plugin-offline',

    // This plugin sets up Google Analytics for you.
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-91652198-1',
      },
    },
    'gatsby-plugin-sass',
  ],
}
