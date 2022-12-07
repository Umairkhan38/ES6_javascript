// memoization is an optimization technique that makes applications more efficient and hence faster.
//  It does this by storing computation results in cache, and retrieving that same information 
//  from the cache the next time it's needed instead of computing it again
console.log("Memoization");


let factorial=(n)=>{
let fact=1;
    for(i=n;i>0;i--){
        fact=fact*i;
    }

    return fact;
}



const memoization=(callback)=>{
let cache={};
return function(...args){
    let n = args[0];


if(n in cache){
    console.log("from cache");
    return cache[n];
}
else{
    console.log("adding to cache");
    let res = callback(n);
    cache[n]=res;
    return res; 
}
}
}



//inserting tom cache 
console.time();
let opt=memoization(factorial);
let efficient=opt(5)
console.log(efficient);
console.timeEnd();


//accessing from cache
console.time();
console.log(efficient);
console.timeEnd();









