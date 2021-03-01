const {spawnSync} = require('child_process');
const fs = require('fs-extra');

fs.removeSync('./lib');
fs.removeSync('./es');
spawnSync('tsc', ['--noEmit', 'false']);
spawnSync('tsc', ['--noEmit', 'false', '--outDir', './es', '-m', 'ES6']);
