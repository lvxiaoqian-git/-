let str = "11223344777";

let strSlice = str.slice(1, 4);
let strSubString = str.substring(6, 3);
let strSubstr = str.substr(2, 7);

let strCodePointAt = str.codePointAt(1);
let strFromCodePointAt = String.fromCharCode(50);

console.log(strSlice, strSubstr, strSubString);
console.log(strCodePointAt, strFromCodePointAt, "😀");

// function snake2camel(str) {
//     if(str){
//         let arr =str.split("_").map((item,index)=>{
//             return index<1?item:item.replace(item[0],item[0].toUpperCase());
//         })
//         return arr.join("");
//     }else{
//         return '';
//     }
// }

// console.log(snake2camel());

// function camel2snake(str) {
//     console.log(str.indexOf(/[A-Z]/));
//     str.toLocaleLowerCase()
//     console.log()
// }

// camel2snake("dDsaBdsaAdsdsads");

function parseQueryString(url) {
  let obj = {};

//   url?url
//     .slice(url.indexOf("?") + 1)
//     .split("&")
//     .forEach((element) => {
//       obj[element.split("=")[0]] = decodeURIComponent(element.split("=")[1]);
//     }):obj={};
//     return obj;
// }

// console.log((parseQueryString()));