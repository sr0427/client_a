// オブジェクト
var person = {
    name : "John",
    age : 30,
    city : "NY",
}

console.log(person)

// Object -> JSON
const jsonString = JSON.stringify(person)
console.log(jsonString)

// JSON -> Object
person = JSON.parse(jsonString)
console.log(person)