/**
 * Using ESM : A fast, production ready, zero-dependency ES module loader for Node 6+!
 * @see https://www.npmjs.com/package/esm
 * 
 * using Alias : Create aliases of directories and register custom module paths in NodeJS like a boss!
 * @see https://www.npmjs.com/package/module-alias
 */
require = require("esm")(module/*, options*/)

require('module-alias/register')

module.exports = require("./server.js")