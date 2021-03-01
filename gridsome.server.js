
const { resolve } = require('path')

const peopleData = require('./src/assets/content/data/info.json')

module.exports = (api) => {
  api.loadSource(actions => {
    const collection = actions.addCollection('people')

    for (const item of peopleData) {
      collection.addNode({ ...item })
      api.createPages(({ createPage }) => {
        createPage({
          path: `/me/${ item.username }`,
          component: resolve('./src/pages/me/[username].vue'),
          context: {
            username: item.username
          }
        })
      })
    }
  })

}
