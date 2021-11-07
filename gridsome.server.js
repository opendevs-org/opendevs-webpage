
const { resolve } = require('path')

const teamData = require('./src/assets/content/data/info.json')

module.exports = (api) => {
  api.loadSource(actions => {
    const collection = actions.addCollection('team')

    for (const item of teamData) {
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
