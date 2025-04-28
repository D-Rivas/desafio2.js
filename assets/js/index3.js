const digit1 = document.querySelector('#digit1');
const digit2 = document.querySelector('#digit2');
const digit3 = document.querySelector('#digit3');
const button = document.querySelector('#checkPassword');
const result = document.querySelector('#result');

button.addEventListener('click', () => {
    const password = digit1.value + digit2.value + digit3.value;

    if (password === '911') {
        result.textContent = 'password 1 correcto';
        result.style.color = 'green';
    } else if (password === '714') {
        result.textContent = 'password 2 correcto';
        result.style.color = 'green';
    } else {
        result.textContent = 'password incorrecto';
        result.style.color = 'red';
    }
})