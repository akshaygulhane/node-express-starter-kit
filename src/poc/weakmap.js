let weakmap = new WeakMap();
let map = new Map();

let key1 = {};
let fn = function() {};

weakmap.set(key1, fn);
map.set("test", "test");
console.log(weakmap.get(key1));
console.log(map.get("test"));