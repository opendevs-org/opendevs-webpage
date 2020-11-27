
module.exports = {
  theme: {},
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'src/**/*.vue',
      'src/**/*.html',
    ]
  },
  variants: {},
};
