// Generated by CoffeeScript 1.9.1
var log;

log = function(message) {
  return console.log("[npub] " + message);
};

log.error = function(message) {
  return console.error("[npub] " + message);
};

module.exports = log;
