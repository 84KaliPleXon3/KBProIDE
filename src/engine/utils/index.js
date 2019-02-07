import file from './file';
import ui from './ui';
const rootDir = require('electron-root-path').rootPath;
const baseDir = rootDir + ((process.env.NODE_ENV == 'development') ? '/../../..' : '');
// export function camel (str) {
//   const camel = (str || '').replace(/-([^-])/g, g => g[1].toUpperCase());

//   return capitalize(camel);
// }

// export function camelActual (str) {
//   return (str || '').replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''));
// }

// export function kebab (str) {
//   return (str || '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
// }

// export function randomNumber (min, max) {
//   return Math.floor(Math.random() * max) + min;
// }

// export function randomString (length = 5) {
//   let text = '';
//   const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

//   for (let i = 0; i < length; i++) {
//     text += possible.charAt(Math.floor(Math.random() * possible.length));
//   }

//   return text;
// }

const randomElement = (arr = []) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const kebab =  (str) => {
  return (str || '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

const toggleFullScreen = () => {
  let doc = window.document;
  let docEl = doc.documentElement;

  let requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  let cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  }
  else {
    cancelFullScreen.call(doc);
  }
};
const readFile = (dir,callback)=>{
  file.readFile('E:\\Bloccoly\\Research\\vue-material-admin-master\\LICENSE',"utf8", callback);;
}

export default {
  readFile,
  randomElement,
  toggleFullScreen,
  kebab,
  ui,
  filterFileName : function(obj,filterName){    
    var res = {};
    Object.keys(obj).forEach(key=>{
        Object.keys(obj[key]).forEach(ckey=>{
            if(ckey.startsWith(filterName)){
                if(!(key in res)){
                    res[key] = {};
                }
                res[key][ckey] = obj[key][ckey];
            }
        });
    });
    return res;
  },
  //-------- file ------//
  fs : require('fs'),
  baseDir : baseDir,
  componentDir : baseDir + '/components',    
  staticComponentWebpackDir : './components',
  pluginDir : baseDir + '/plugins',
  packageDir : baseDir + '/packages',
  boardDir : baseDir + '/boards',
  platformDir : baseDir + '/platforms'
};