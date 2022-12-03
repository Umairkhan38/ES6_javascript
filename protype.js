console.log("this is prototype in javascript");

let obj=
{
    name:"jhon",
    age:32
}

let prtype={
    data:()=>{
        console.log("prototype object");
    }
}

//sub prototype

let subPro={
    sub:()=>{
        console.log("sub prototype");
    }
}

obj.__proto__=prtype;
prtype.__proto__=subPro;

obj.sub();


