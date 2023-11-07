function getApiURL() {
    const currentURL = location.href
    const fileName = currentURL.substring(currentURL.lastIndexOf('/') + 1)
    const baseURL = currentURL.replace(fileName, '')
    console.log(currentURL)
    console.log(fileName)

    return baseURL
}

const API_URL = getApiURL() + 'data/persons.json'
console.log(API_URL)

// XMLHttpRequestのインスタンス
const xhr = new XMLHttpRequest()

// 指定したURLでGETリクエストし、非同期処理で設定
xhr.open("GET", API_URL, true)

// サーバから結果が返ってきたとき（コールバック関数）
xhr.onload = function () {
    // 200 : success
    if (xhr.status === 200) {
        const json = xhr.responseText
        console.log(json)

        // JSON -> Array & Object
        const persons = JSON.parse(json)
        console.log(persons)

        for (const person of persons) {
            console.log(person.name)
        }
    } else {
        console.log('Error')
    }
}

// 実行
xhr.send()