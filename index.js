const textInput = document.getElementById('input-text');
const btnEncrypt = document.querySelector('.btn-encrypt');
const btnDecrypt = document.querySelector('.btn-decrypt');
const btnCopy = document.querySelector('.btn-copy');

function encryptText(text) {
    let strArr = text.split('')
    let arrEncripted = []

    strArr.forEach(x => {
        if (x === "a") {
            arrEncripted.push('ai');
        } else if (x === "e") {
            arrEncripted.push('enter');
        } else if (x === "i") {
            arrEncripted.push('imes');
        } else if (x === "o") {
            arrEncripted.push('ober');
        } else if (x === "u") {
            arrEncripted.push('ufat');
        } else {
            arrEncripted.push(x)
        }
    })
    return arrEncripted.join('');
}

function decryptText(text) {
    let d = text;
    d = d.replaceAll('ai', 'a');
    d = d.replaceAll('enter', 'e');
    d = d.replaceAll('imes', 'i');
    d = d.replaceAll('ober', 'o');
    d = d.replaceAll('ufat', 'u');
    return d;
}

btnEncrypt.addEventListener('click', () => {
    if (!textInput.value) { return; }
    const resultsCard = document.querySelector('.results-card');
    const decryptCard = document.querySelector('.results-decrypt');
    const decryptText = document.querySelector('.decrypted-text');
    resultsCard.style.display = "none";
    resultsCard.style.visibility = "hidden";
    decryptCard.style.display = "flex";
    decryptCard.style.visibility = "visible";
    decryptText.innerText = encryptText(textInput.value);
})

btnDecrypt.addEventListener('click', () => {
    if (!textInput.value) { return; }
    const decryptTextHTML = document.querySelector('.decrypted-text');
    decryptTextHTML.innerText = decryptText(textInput.value)
})

btnCopy.addEventListener('click', () => {
    if (!textInput.value) { return; }
    const decryptText = document.querySelector('.decrypted-text');
    navigator.clipboard.writeText(decryptText.innerText);
})