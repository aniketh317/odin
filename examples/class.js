class Page{
    constructor(text){
        this.text = text;
    }

    print(){
        console.log(this.text);
    }
}

p = new Page('Aniketh');
p.print()

class Notebook{
    constructor(nm){
        this.name = nm;
        this.pages = [];
    }
    addPage(text){
        this.pages.push(text);
    }
    print(){
        console.log(`\nTitle: ${this.name}`);
        for(let i=0;i<this.pages.length;i++){
            console.log(`Page ${i+1}: ${this.pages[i]}`);
        }
    }
}

var A = new Notebook('Diary')
A.addPage('pg1');
A.addPage('pg2');
A.print()

let c = Notebook;
var B = new c('Diars');
B.print()