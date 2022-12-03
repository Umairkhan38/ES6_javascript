console.log("Higher Order Functions :")

let companies=[
    {name:"Google",networth:"$1135 billion",category:"product based",founder:"Lary Page"},
    {name:"facebook",networth:"$256 Billion",category:"product based",founder:"Mark Zuckerburg"},
    {name:"Tesla",networth:"$622.33 Billion",category:"product based",founder:"Elon Musk"},
    {name:"goldman",networth:"$6.33 Billion",category:"Service based",founder:"Elon Musk"}
]

let ages=[60,41,52,48,32];

//forEach
console.log("Companies are :")
companies.forEach((companies,index)=>{
    console.log(companies.name);
})




//Filter

const age=ages.filter((age,idx)=>{
        return age>42;  
    })

console.log(age)

//filtering category wise


let category=companies.filter((cat,idx)=>{
    if(cat.category=="product based"){
        return cat;
    }
})

console.log(category);




//map (used for iteration)
companies.map((company,index)=>{
    console.log(index,company.name,company.founder);
})




//sort function

const sortAge=age.sort((c1,c2)=>{
    //for ascending order
    // if(c1.start<c2.start){
    //     return 1;
    // }
    // else{
    //     return -1;
    // }

    //For Descending Order
    c2-c1;
})


console.log(sortAge);




//reduce/submission of ages

const ageSum=ages.reduce((total,age)=>{
   return  total+age
})

console.log(ageSum);

