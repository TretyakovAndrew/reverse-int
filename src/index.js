module.exports = function reverse (n) {
    n = Math.abs(n);
    let strN = String(n);
    
    return strN.split('').reverse().join('');
}