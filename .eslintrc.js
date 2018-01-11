module.exports = {
  extends: ['airbnb'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jxs']
      }
    ],
    'react/prop-types': [0]
  },
  globals: {
    document: true
  }
};
