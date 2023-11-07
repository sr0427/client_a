function getApiURL() {
    const currentURL = location.href
    const fileName = currentURL.substring(currentURL.lastIndexOf('/') + 1)
    const baseURL = currentURL.replace(fileName, '')
    return baseURL
}

const API_URL = getApiURL() + 'data/prefectures.json'

// 非同期処理で、都道府県API読み込み
const loadPrefectures = async () => {
    // APIに接続して、レスポンスがあるまで待つ
    const response = await fetch(API_URL)
    // レスポンス）（JSONデータ）を、オブジェクトに変換
    const prefectures = await response.json()
    console.log(prefectures)
    createPrefectures(prefectures)
}

// 都道府県プルダウン作成
const createPrefectures = (prefectures) => {
    prefectures.forEach(prefecture => {
        var option = document.createElement('option')
        option.value = prefecture.code
        option.innerHTML = prefecture.name
        document.getElementById('prefecture').appendChild(option)
    });
}

const SEARCH_URI = "https://zipcloud.ibsnet.co.jp/api/search";
const searchAPI = async (zipcode) => {
    if (!zipcode) return;
    const query_param = new URLSearchParams({ zipcode: zipcode, })
    const uri = SEARCH_URI + "?" + query_param;
    console.log(uri);
    // APIからデータ取得
    const response = await fetch(uri)
    const data = await response.json()
    console.log(data)
    return data;
}

const searchHandler = async () => {
    const zipcode = document.getElementById('zipcode').value;
    var data = await searchAPI(zipcode);

    var results = data.results[0]
    // プルダウンの都道府県コードを選択
    document.getElementById('prefecture').value = results.prefcode
    // 住所の自動入力
    document.getElementById('city').value = results.address2 + results.address3
}

// 都道府県読み込み処理
loadPrefectures()

