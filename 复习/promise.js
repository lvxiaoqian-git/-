let p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise111")
    },1000)
})

setTimeout(()=>{
    console.log(111)
},1000)

setTimeout(()=>{
    console.log(11)
},1000)

p.then((res)=>{console.log(res)})

setTimeout(()=>{
    console.log(1901)
},100)

console.log(1221)