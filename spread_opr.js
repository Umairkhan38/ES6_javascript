console.log("This is Spread Operator:");

let arr=["Cherry","Lips","Crystals","Scars"];

//using Array

const spread=(first,second,third)=>{
    console.log(first,second,third)
}

spread(...arr);




//using Object

var myObj={
    name:"Khan Umair",
    rollno:31,
    stay:"Kurla",
    hobbies:["Cricket","Travelling"]
}
const{name,...other}=myObj;
console.log(name);
console.log("Stay Before Updating "+other.stay);


var newObj={
    ...myObj,
    stay:"Mumbra"
}

const{stay}=newObj;

console.log("Stay After Updating "+stay);


