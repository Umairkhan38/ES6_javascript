// A closure is the combination of a function bundled together (enclosed) with references to its  lexical environment ,In other words closure gives you access to an outer function's scope from an inner function.

console.log("Closure In js");


function getName(){
    let name="Ahmad";
    
    const inner=()=>{
        console.log(name);
    }

    name="faraz"             
return inner;
}


let ans=getName();
ans();



