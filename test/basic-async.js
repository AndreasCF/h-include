var runTests = require('./framework.js').runTests;

var tests = [
  ['#a', "this text is included"],
  ["#b", "this text overwrote what was just there."]
];

runTests("basic-async.html", tests);
