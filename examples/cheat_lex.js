function art(){
    eval('a = 2');
}
art()
console.log(a);

var obj={
    a:2,
    b:'st'
}

console.log(obj.a,obj.b);
with(obj){
    a = 25;
    b = 36;
    c = 'fellow';
}

console.log(obj.a,obj.b, c);