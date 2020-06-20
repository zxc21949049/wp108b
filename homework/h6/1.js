  
var c2e = { 狗: 'dog', 貓: 'cat', 一隻: 'a', 追: 'chase', 吃: 'eat' };
function mt (c) {
  var e = [];
  for (let i in c) {
    var eword = c[i];
    var cword = c2e[eword];
    e.push(cword);
  }
  return e;
}
var e = mt(process.argv.slice(2));
console.log(e);