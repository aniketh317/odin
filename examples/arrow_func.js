var a = (x)=>{
    x = x*2;
    let y = x+3;
    return y; 
};

let c = 20
var b = (x)=>(y)=>(z)=>{c = c+x;
c = c*y; c = c-z;}
console.log(a.name, b.name);
console.log('1:'+typeof(b), c);
let d = b(2);
console.log('2:'+typeof(d), c);
let e = d(3);
console.log('3:'+typeof(e), c);
let f = e(6);
console.log('4:'+typeof(f), c);