const config = require('./src/assets/content/data/config.json')
const teamData = require('./src/assets/content/data/info.json')

module.exports = {
  siteName: config.title,
  //need this for forestry preview docker image
  host: process.env.HOSTNAME,
  port: 8080,
  siteUrl: 'https://www.opendevs.in',

  metadata: {
    siteName: config.title,
    siteDescription: config.description,
    teamData,
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Blog',
        baseDir: './src/assets/content/',
        path: 'blog/**/*.md',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer']
        }
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        shouldImport: true,
        shouldTimeTravel: true,
      }
    },
    {
      use: '@gridsome/plugin-sitemap'
    }
  ],
}
