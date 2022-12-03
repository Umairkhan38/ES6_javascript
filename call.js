console.log("this is call.js");

let obj={
    name:"khan Umair",
    age:21,
    myfunc:function(){
        console.log(this.name)
        console.log(this.age)
    }
}

// obj.myfunc();


//but i want to call the same function in other object without re-writing it so for that i need to use call() function

let obj2={
    name:"harry",
    age:12
}

// obj.myfunc.call(obj2);

///in ncase if we want to access object through this function from outside
function myfunc(state,country){
    console.log(this.name)
    console.log(this.age)
    console.log("State is "+state)
    console.log("Country is "+country)
}


myfunc.call(obj2,"Maharashtra","India");


//aplly:in apply the diffrence is that we pass array list as a parameter  
console.log("starting apply")
myfunc.apply(obj,["Mharashtra","India"])


//In bind we store the function in var and call it later
console.log("Calling bind")
let store=myfunc.bind(obj2,"Uttarpradesh","Inida")
store();