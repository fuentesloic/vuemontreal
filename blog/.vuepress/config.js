module.exports = {
  description: "Vue Montreal Meetups actuality",
  theme: "thindark",
  themeConfig: {
    repo: "vuemontreal/vuemontreal",
    docsDir: "blog",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    logo: "/vue-logo-website-trimmed-transparent.png",
    lastUpdated: "Last Updated",
    algolia: {
      apiKey: "<API_KEY>",
      indexName: "<INDEX_NAME>"
    }
  },
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/favicons-vuemontreal/favicon57.png"
      }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/favicons-vuemontreal/favicon60.png"
      }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/favicons-vuemontreal/favicon72.png"
      }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/favicons-vuemontreal/favicon76.png"
      }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/favicons-vuemontreal/favicon114.png"
      }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/favicons-vuemontreal/favicon120.png"
      }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/favicons-vuemontreal/favicon144.png"
      }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/favicons-vuemontreal/favicon152.png"
      }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicons-vuemontreal/favicon180.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicons-vuemontreal/favicon32.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/favicons-vuemontreal/favicon96.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicons-vuemontreal/favicon16.png"
      }
    ]
  ],
  plugins: [
    ["@vuepress/register-components"],
    ["@goy/svg-icons"],
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-146295749-1"
      }
    ],
    [require("./plugins")]
  ]
};
