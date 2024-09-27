var a=10;

var a=20;
console.log(a);

//var can be accessed from any where in the code globally

var f=60;
var g=70;

//let can be reassigned and accessed within the block are comes under scope and which are written in the block are comes under the script scope

let b=20;
let s=30;
b=s;
console.log(b);

// const cannot be redeclared and reaasigned and reinitialidsed and can beb initialised only at initialised

const c=30;
console.log(c);

{
    var h=80;
    var i=90;
    console.log(i);
    let d=40;
    console.log(d);
    console.log(f);
}

console.log(i); 

{
    const e=50;
    console.log(e);
    console.log(g);
}
