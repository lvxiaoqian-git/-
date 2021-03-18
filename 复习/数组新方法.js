// let arr = [1,2,3,4,5,6,7,8,9,10];

// // 数组元素替换，改变原数组
// arr.splice(3,0,11,11,11,11);

// console.log(arr);

// // 数组截取片段,返回新数组，不改变原数组
// let arrSlice = arr.slice(2,4);

// console.log(arrSlice);

// // 数组拼接
// let arrConcat = arr.concat([99,99,99])

// console.log(arrConcat)

// arr.forEach((item,index)=>{
//     console.log(item)
// })

// const arrFind = arr.find(item=>{
//     return item === 11
// })

// console.log("查找",arrFind)

// const arrFilter = arr.filter(item=>{
//     return item === 11
// })

// console.log("过滤",arrFilter);

// const arrReverse = arr.reverse();

// console.log("颠倒",arrReverse);

// let str = "bobao,tom,jirui";

// let strArr = str.split(",");
// console.log("字符串转数组",strArr);

// let arrJoin = strArr.join(";");
// console.log("数组转字符串",arrJoin);

// console.log(arr.reverse());

// let arrReducs = arr.reverse().reduce((acc,item,index)=>{
//     console.log(acc,item,index)
//     return index
// },0)

// console.log(arrReducs)

function findSum(arr, target) {
    let arrTitle = [];
    arr.forEach((element,title)=>{
        arr.slice(title+1).forEach((item,index)=>{
            if(element+item === target){
                arrTitle = [title,index+title+1];
            }
        })
    })
    return arrTitle
}

console.log(findSum([1, 8, 10, 11], 21))