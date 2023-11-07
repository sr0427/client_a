
function auth() {
    var email = document.getElementsByName('email')[0].value
    var password = document.getElementsByName('password')[0].value

    console.log(email)
    console.log(password)

    if (email == "" || password == "") {
        document.getElementById('error-message')
                .innerHTML = "Emailまたはパスワードを入力してください"
        //サーバにデータは送信しない
        return false;
    } else {
        //サーバにデータを送信する
        return true;
    }

}