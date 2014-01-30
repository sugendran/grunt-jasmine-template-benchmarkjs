var template = __dirname + '/template.html';
var benchmarkjs = __dirname + '/vendor/benchmark/benchmark.js';
var nanojar = __dirname + '/vendor/benchmark/nano.jar';
var nanojava = __dirname + '/vendor/benchmark/nano.java';

function moveBenchmarkFiles(task) {
  task.copyTempFile(benchmarkjs, 'benchmark.js');
  task.copyTempFile(nanojar, 'nano.jar');
  task.copyTempFile(nanojava, 'nano.java');
}


function process(grunt, task, context) {
  moveBenchmarkFiles(task);
  context.useNanoTime = false;
  var source = grunt.file.read(template);
  return grunt.util._.template(source, context);
}

module.exports = {
  process: process
};
