console.log("This is Asyn & Await Demonstration")

//This is a Demo of async await program

let firstObj=[{name:"Shaun Tait",team:"Australia",record:"max-speed-160kmph"}
,{name:"sachin Tendulker",team:"India",record:"100 international-centuries,Mopst Runs"}
,{name:"Murlidharan",team:"SriLanka",record:"800-test wicket,Most wicket Taker"}]

let newObj={name:"virat Kohli",team:"india",record:"No1 batsman in the world"};

let test=document.getElementById("test");


function getData(firstObj)
{   
    let data="";
    setTimeout(()=>{
    firstObj.forEach((elem)=>{    
        data+=`
        <li>${elem.name}</li>
        <li>${elem.team}</li>
        <li>${elem.record}</li>`
    })
    test.innerHTML=data;

    },2000)
}


 function updateData(newObj){
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                let err=false;
                if(!err){
                    resolve()
                }else{
                    reject(console.log("error occured"));
                }
            
        }, 4000);
    })
}



async function start(){
await updateData(newObj)
getData(firstObj)

}

start();


