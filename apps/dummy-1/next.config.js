const withTM = require("next-transpile-modules")(["@zoomable/ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
