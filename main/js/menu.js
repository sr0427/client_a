console.log(this)

const messageElement = document.getElementById('message')

this.name = "Bob"
console.log(this)

function sayFunction(element) {
    console.log(element)
    messageElement.innerHTML = element.name
}

const person  = {
    name: "John",
    sayHello1: function () {
        messageElement.innerHTML = this.name
    },
    sayHello2: () => {
        messageElement.innerHTML = this.name
    },
}

function sayAnonymous(element) {
    person.sayHello1()
}

function sayArrow(element) {
    person.sayHello2()
}

//コンストラクタみたいなもの
function Person(name) {
    console.log(this.name)
    this.name = name
    console.log(this.name)
    messageElement.innerHTML = this.name
}

function sayPerson(element) {
    new Person("Alice")
}