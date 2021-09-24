const elem = document.querySelector(".translate");
const text = document.getElementById("text");
const m_box = document.getElementById("output");
url = "https://api.funtranslations.com/translate/minion.json";

function display(message){
    m_box.innerText = message;
}

function disp_error(e){
    alert(e)
}

function get_translate(e){
    fetch(url+"?text="+text.value)
    .then(resp => resp.json())
    .then(data => display(data.contents.translated))
    .catch(disp_error);
}

elem.addEventListener("click", get_translate);