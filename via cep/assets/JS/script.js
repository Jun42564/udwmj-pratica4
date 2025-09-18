document .addEventListener('DOMContentLoaded'), () => {
    const cepimput = document.getElementById('cepInput');
    const searchButton = document.getElementById('searchButton');
    const resultBox = document.getElementById('result');
    const messageBox = document.getElementById('message');
}
const cepresult = document .getElementById('cepResult');
const logradouroresult = document .getElementById('logradouroResult');
const complementoresult = document .getElementById('complementoResult');
const bairroresult = document .getElementById('bairroResult');
const cidaderesult = document .getElementById('cidadeResult');
const estadoresult = document .getElementById('estadoResult');

functon = clearresults() 
{
    cepresult.textContent = '';
    logradouroresult.textContent = '';
    complementoresult.textContent = '';
    cidaderesult.textContent = '';
    estadoresult.textContent = '';
    resultBox.classlist.add('hidden');
    messageBox.classlist.add('hidden');
    resultBox.textContent = '';
    messageBox.classlist.remove('error');
}
function showMessage(msg, iserror = false) {
    messageBox.textContent =msg;
    messageBox.classlist.remove('hidden');
    if (isError) {
        messageBox.classlist.add('error');
    } else {
        messageBox.classlist.remove('error');
    }
}