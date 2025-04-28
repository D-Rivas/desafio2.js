const select1 = document.querySelector('#digit1');
const select2 = document.querySelector('#digit2');
const select3 = document.querySelector('#digit3');
const button = document.querySelector('#check');
const message = document.querySelector('#message');

button.addEventListener('click', () => {
    const password = select1.value + select2.value + select3.value;

    if (password === '911') {
        message.textContent = "password 1 correcto";
        message.style.color = "green";
    } else if (password === '714') {
        message.textContent = "password 2 correcto";
        message.style.color = "green";
    } else {
        message.textContent = "password incorrecto";
        message.style.color = "red";
    }
})