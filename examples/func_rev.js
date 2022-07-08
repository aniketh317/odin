var func = function(name, pos = 'dummy'){
    var ret ={
        'name':name,
        'pos':pos
    };
    return ret;
}

var z = func('Aniketh', 'Hyderabad')
console.log('Name is:'+z.name,'\nLocation is:'+z.pos);

var z = func('Aniketh')
console.log('\nName is:'+z.name,'\nLocation is:'+z.pos);

var wst = {
dum(nam){
    console.log(`\nName is ${nam}`);
}
}

wst.dum('Aniketh')

//Play with objects
var a = [1,2,3];
var b = a;
console.log(a==b, a===b)
b = [1,2,3];
console.log(a==b, a===b)