module.exports = {
  extends: ['airbnb'],
  rules: {
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jxs'],
      },
    ],
    'react/prop-types': [0],
  },
  globals: {
    document: true,
  },
};
