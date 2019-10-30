"use strict";

exports.default = void 0;

let exec = require('child_process').exec;

class PHP {}

exports.default = PHP;

PHP.status = async () => {
  return new Promise((resolve, reject) => {
    exec('service php7.3-fpm status', (err, stdout, stderr) => {
      if (err || stderr) {
        reject(stderr);
      }

      resolve({
        loaded: stdout.match(new RegExp('Loaded:[^\\n+?]+', 'gm'))[0],
        active: stdout.match(new RegExp('Active:[^\\n+?]+', 'gm'))[0],
        cpu: stdout.match(new RegExp('CPU:[^\\n+?]+', 'gm'))[0],
        pid: stdout.match(new RegExp('Main PID:[^\\n+?]+', 'gm'))[0],
        tasks: stdout.match(new RegExp('Tasks:[^\\n+?]+', 'gm'))[0],
        memory: stdout.match(new RegExp('Memory:[^\\n+?]+', 'gm'))[0]
      });
    });
  });
};