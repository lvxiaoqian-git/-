let map = new Map();

map.set("name1","王大拿");
map.set("name2","王中拿");
map.set("name3","王小拿");
map.set("name4","王上拿");
map.set("name5","王下拿");

console.log(map.get("name2"));

console.log("获得所有key",map.keys());
console.log("获得所有value",map.values());
console.log("获得所有实体",map.entries());
