// This will search for files ending in .test.js and require them
// so that they are added to the webpack bundle
const testsContext = require.context('./src/', true, /.+\.test.js?$/);
testsContext.keys().forEach(testsContext);
// module.exports = testsContext;