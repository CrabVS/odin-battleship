module.exports = {
  // ... other Jest configuration options
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Add this if you're using CSS modules
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  setupFilesAfterEnv: ['./jest.setup.js'], // Create this file if you need to set up anything specific for testing
};