function range(start,end) {
    if(arguments.length==1)
    {
        var ret = (x)=>{
            var arr = Array();
            for(let z=start;z<=x;z++)
                arr.push(z);
            return arr;
        }
        return ret;
    }
    else if(arguments.length==2)
    {
        var arr = Array();
        for(let z=start;z<=end;z++)
            arr.push(z);
        return arr;
    }
}

console.log(range(3,3));    // [3]
console.log(range(3,8));    // [3,4,5,6,7,8]
console.log(range(3,0));    // []

var start3 = range(3);
var start4 = range(4);

console.log(start3(3));     // [3]
console.log(start3(8));     // [3,4,5,6,7,8]
console.log(start3(0));     // []

console.log(start4(6));     // [4,5,6]