// Debouncing in JavaScript is a practice used to improve browser performance. There might be some functionality in a web page which requires time-consuming computations. If such a method is invoked frequently, 
// it might greatly affect the performance of the browser.

console.log("Debouncing")

function getData(){

    console.log("key is pressed");

}



const debounce=(call,delay)=>{
let timer;
return function(...args){

    if(timer){
        clearTimeout(timer)
    }

    timer=setTimeout(()=>{
        call();
    },delay)
}
    
}



let efficient=debounce(getData,1000);

