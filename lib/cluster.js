
/*!
 * Cluster
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var Master = require('./master')
  , fs = require('fs');

/**
 * Export `start` as the module.
 */

exports = module.exports = start;

/**
 * Library version.
 */

exports.version = '0.7.1';

/**
 * Expose utils.
 */

exports.utils = require('./utils');

/**
 * Start a new `Master` with the given `server`.
 *
 * @param {http.Server} server
 * @return {Master}
 * @api public
 */

function start(server, options) {
  return new Master(server, options);
}

/**
 * Expose middleware via lazy-requires.
 */

fs.readdirSync(__dirname + '/plugins').forEach(function(plugin){
  plugin = plugin.replace('.js', '');
  exports.__defineGetter__(plugin, function(){
    return require('./plugins/' + plugin);
  });
});