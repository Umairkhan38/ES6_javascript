console.log("This is Throttling javascript");


const throttle=(callbk,delay)=>{
    return function(...args){
        document.getElementById("submit").disabled=true;
        document.getElementById("submit").style="cursor:not-allowed;display:block; margin:4px auto;";
        setTimeout(()=>{
            callbk();
        },delay)
    }
}



const driver=throttle(()=>{
    document.getElementById("submit").disabled=false;
    document.getElementById("submit").style="cursor:pointer;display:block; margin:4px auto;";
    console.log("You have clicked a button");
},3000);
