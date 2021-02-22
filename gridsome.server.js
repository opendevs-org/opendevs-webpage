
const { resolve } = require('path')

const infoData = require('./src/assets/content/data/info.json')

module.exports = (api) => {
  api.loadSource(actions => {
    const collection = actions.addCollection('people')

    for (const item of infoData) {
      collection.addNode({ ...item })
      api.createPages(({ createPage }) => {
        createPage({
          path: `/Portfolio/${ item.username }`,
          component: resolve('./src/pages/Portfolio/[username].vue'),
          context: {
            username: item.username
          }
        })
      })
    }
  })

}
