console.log("This is CallBack Function")

let test=document.getElementById("test");


let myObj=[{name:"Khan",age:20,place:"Mumbra"},
{name:"John",age:30,place:"Kurla"}
]


let newObj={name:"Khan",age:45,place:"Azamgarh"}

function updateData(newObj){
    return new Promise((reject,resolve)=>{
    setTimeout(() => {
        myObj.push(newObj);
        // getData();
        let err=true;
        if(!err){
            resolve()
        }else{
            reject("error occured");
        }
        
    }, 4000);
})

}



function getData(){
    let data="";
setTimeout(()=>{
    myObj.forEach((elem,index)=>{
        data+=`
        <li>${elem.name}</li>
        <li>${elem.age}</li>
        <li>${elem.place}</li>`
    })
    test.innerHTML=data;
},2000)

}


updateData(newObj).then(getData).catch(err=>console.log(err));