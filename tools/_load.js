/* Lädt alle Story-Dateien in einen VM-Kontext und gibt STORY zurück. */
const fs = require('fs'), vm = require('vm'), path = require('path');
module.exports = function load(dir){
  dir = dir || path.join(__dirname, '..', 'js');
  const c = {}; c.window = c; c.console = console;
  vm.createContext(c);
  const files = ['story-core.js'].concat(
    fs.readdirSync(dir).filter(f => /^story-/.test(f) && f !== 'story-core.js').sort());
  files.forEach(f => vm.runInContext(fs.readFileSync(path.join(dir, f), 'utf8'), c, {filename:f}));
  return {STORY: c.STORY, files};
};
