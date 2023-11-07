// 2秒後に、コールバック関数を実行
function getPerson(resolve) {
    setTimeout(() => {
        var person = {
            name: "John",
            age: 30,
            city: "NY",
        }
        console.log('Promise run')
        // Promiseの コールバック関数
        resolve(person)
    }, 2000)
}

// ブラウザにデータを表示する
function showPerson(person) {
    document.getElementById('name').innerHTML = person.name
    document.getElementById('age').innerHTML = person.age
    document.getElementById('city').innerHTML = person.city
}

// Promise 非同期処理（asyncronus process)
const promise = new Promise((resolve, reject) => {
    getPerson(resolve)
})

// resolveが実行されたら
promise.then((person) => {
    showPerson(person)
}).catch((error) => {
    console.log(error)
})