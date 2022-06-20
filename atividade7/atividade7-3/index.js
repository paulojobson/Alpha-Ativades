const btao = document.getElementById("send");
const btao2 = document.getElementById("clear");
const selectText = document.getElementById("textUser");
const selectTextArea = document.getElementById("boxText");

btao.addEventListener("click", addTextByClick);
btao2.addEventListener("click", clearHistory);
selectText.addEventListener("keypress", addTextByEnter);

function addTextByClick(){
    selectTextArea.value += "\n" + selectText.value;
    if (selectText.value != "") {
        selectTextArea.scrollTop += selectTextArea.scrollHeight;
    }
};

function addTextByEnter(e){
    if(e.key === "Enter"){
        btao.click();
    };
};

function clearHistory(){
    selectTextArea.value = "";
};