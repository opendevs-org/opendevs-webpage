
const infoData = require('./src/assets/content/data/info.json');

module.exports = (api) => {
  api.loadSource(actions => {
    const collection = actions.addCollection('people');

    for (const item of infoData) {
      collection.addNode({ ...item });
      api.createPages(({ createPage }) => {
        createPage({
          path: `/portfolio/${item.username}`,
          component: './src/pages/portfolio/[username].vue',
          context: {
            username: item.username
          }
        });
      });
    }
  });

};
