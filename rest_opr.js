console.log("This is Rest Operator");

//spread operator returns an array of indefinite / any number of argumennts passed as an argument

//Using Array

function addNumbers(a,b,...other){

    console.log(other);
    return a+b;
}

let sum=addNumbers(5,8,9,6,3,4,1)
console.log(sum);


//Using Object

var myObj={
    name:"Khan Umair",
    rollno:31,
    age:20,
    hobbies:["Cricket","Travelling"]
}
const{name,...other}=myObj;
console.log(name);
console.log("Age Before Updating "+other.age);


var newObj={
    ...myObj,
    age:21
}

const{age}=newObj;

console.log("Age After Updating "+age);
