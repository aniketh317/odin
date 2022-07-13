/*Modules and strange jugglaries. Observe how the refernces remain active even after one function entry, in case of these modules*/
/*References remain active because of being used in the nested functions*/ 

function parent(par){
    var api = {
        print:()=>{
            console.log(par)
        },
        sett(val){
            par = val;
        },
        add:(inc)=>{
            par += inc;
        }
    }
    return api;
}

var obj = parent(1);
obj.print();//prints 1
obj.sett(10);
obj.print();//prints 10
obj.add(5);
obj.print();//prints 15

console.log('\n');

function child(par,chi){
    var parapi = parent(par);
    var dum = chi;
    var api = {
        print(){
            parapi.print();
            console.log(chi,dum);
        },
        sett(valp,valc){
            par = valp;
            parapi.sett(valp);
            chi = valc;
        },
        add(incp, incc){
            parapi.add(incp);
            chi += incc;
        }
    }
    return api;
}

obj = child(1,'a');
obj.print();//prints 1 and a,a
obj.sett(10,'b');
obj.print();//prints 10 and b,a
obj.add(5,'c');
obj.print();//prints 15 and bc,a

