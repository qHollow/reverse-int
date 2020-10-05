module.exports = function reverse (n) {
  n = n.toString().split("");
  if(n[0] === '-'){
    n = n.slice(1, n.length);
  }
  return +n.reverse().join("");
}
