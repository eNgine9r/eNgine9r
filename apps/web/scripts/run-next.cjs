const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const [command = 'dev', ...args] = process.argv.slice(2);
const cwd = process.cwd();
const realCwd = fs.realpathSync.native(cwd);

if (realCwd !== cwd) {
  process.chdir(realCwd);
}

const nextBin = path.join(realCwd, 'node_modules', 'next', 'dist', 'bin', 'next');

const child = spawn(process.execPath, [nextBin, command, ...args], {
  cwd: realCwd,
  stdio: 'inherit',
  env: process.env
});

child.on('exit', (code) => {
  process.exit(code ?? 1);
});

