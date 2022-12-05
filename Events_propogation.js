console.log("This is Events and propogations");
let parent = document.querySelector("div");
let child=document.querySelector("h1");
let list=document.querySelector("ol");



parent.addEventListener("click",(event)=>{
    
    // event.stopPropagation()      It will skip execution of its parent listener
    console.log("Umair Khan")
})

child.addEventListener("click",(event)=>{
    event.stopImmediatePropagation();       //Stop the event listners after assign it eg( below list )
    console.log("child")
})


list.addEventListener("click",(event)=>{
     
    console.log("list")
})

