let a,b;
b = (a=2+3,4+6)
console.log('a is '+a,'\nb is '+b);
let c = a+b
console.log(c)

function art()
{
    let k = 2;
    return k+2;
}

let d = art; 
console.log(d())

var names = [11,22,33,44,55];
console.log(names.length);
console.log(names[3]);

console.log(typeof(d), 42=='42', 42==='42');