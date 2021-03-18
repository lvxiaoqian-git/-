let arr = ["apple","orange","plum"];

console.log(arr);

arr.push(()=>{console.log(211)});
arr.shift()
console.log(arr);
arr[2]();


let newArr = new Array(10);
newArr[3] = 10;
console.log(newArr);

delete arr[0];
console.log(arr);
console.log(typeof arr.toString())