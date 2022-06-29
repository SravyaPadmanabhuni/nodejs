// for installing any package type 'npm install package_name --save' in command
var cowsay = require('cowsay');
console.log(cowsay.say({text:'Example text!'}));
console.log(cowsay.say({text:'Example text!',e:'%%'}));
console.log(cowsay.say({text:'Example text!',e:'22'}));
console.log(cowsay.say({text:'Example text!',e:'%%',T:'&&'}));