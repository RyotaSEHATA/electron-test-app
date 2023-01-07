
const func = async () => {
    const information = document.getElementById('info');
    const response = await window.versions.ping()
    information.innerText = "Response 「" + response + "」 from main.js";
    //console.log(response) // 'pong' と出力
}

func()