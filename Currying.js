console.log("Infinite currying");

const addition=(a)=>{
return function(b){
    return function(c){
        return a+b+c;
    }
}
}

// one way of passing values 

// let aval=addition(5);
// let bval=aval(4);
// let cval=bval(3);
// console.log(cval)


//another way by currying 

let sum=addition(4)(5)(10);
console.log(sum)




//Example of Object

let myObj={
name:"Khan Umair",
age:21,
profession:"Software Engineer"
}


const objRef=(myObj)=>{
    return function(data){
        return myObj[data]
    }
}

let ans=objRef(myObj)("name");
console.log(ans);




// #Infinite Currying

const multiplication=(a)=>{
    return function(b){
        if(b){
         return multiplication(a*b);
        }
         return a;
        

    }
}

let mp=multiplication(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)(11)(); //end parathesis will be empty in infinite currying
console.log(mp);
