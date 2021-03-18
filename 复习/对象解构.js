let obj = {
    name:"王大拿",
    age:18,
    like:"basketball"
}

let { name:name1 } = obj

console.log(name1)

function na(){
    var a = 1
    // var是函数作用域，也就是在一个函数里面可以访问，
    // let是块级作用域，只在一个{}中或者一个分号里访问
    console.log(a)
}

na()


let jsonObj = {
    name:"wang",
    age:12,
    like:"music"
}

// console.log(toString(jsonObj))
let json = JSON.stringify(jsonObj)
console.log(json)