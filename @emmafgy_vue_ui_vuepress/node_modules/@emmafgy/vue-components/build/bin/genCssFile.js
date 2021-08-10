var fs = require('fs');
var path = require('path');
var Components = require('../../components.json');

console.log("genCssFile start...");

Components = Object.keys(Components);
var basepath = path.resolve(__dirname, '../../src/');

function fileExists(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
}

// copyIt(from.js, to.js);
function copyIt(from, to) {
  fs.writeFileSync(to, fs.readFileSync(from));
  //fs.createReadStream(src).pipe(fs.createWriteStream(dst));大文件复制
}


var isSCSS = true;
var indexContent = isSCSS ? '@import "./base.scss";\n' : '@import "./base.css";\n';
var exclude = ['loading'];

Components.forEach(function(key) {
  if (exclude.indexOf(key) > -1) return;
  // 复制文件
  var fileName = key + (isSCSS ? '.scss' : '.css');
  if (key != "util") {
    indexContent += '@import "./' + fileName + '";\n';
  }
  // var filePath = path.resolve(basepath, 'theme/src', fileName);
  // var fromFilePath = path.resolve(basepath, 'lib/components', key, 'style.scss');

  // 如果存在先删除
  // if (fileExists(filePath)) {
  //   // 删除文件
  //   fs.unlinkSync(filePath);
  // }

  // fs.writeFileSync(filePath, fs.readFileSync(fromFilePath), 'utf8');

  // if (!fileExists(filePath)) {
  //   fs.writeFileSync(filePath, fs.readFileSync(fromFilePath), 'utf8');
  //   console.log(theme, ' 创建遗漏的 ', fileName, ' 文件');
  // }




});

fs.writeFileSync(path.resolve(basepath, 'theme/src', isSCSS ? 'index.scss' : 'index.css'), indexContent);

console.log("genCssFile success");
