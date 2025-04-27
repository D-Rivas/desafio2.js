function actualizarStickers() {
    const inputs = document.querySelectorAll('.sticker-input');
    let total = 0;

    inputs.forEach(input => {
        total += parseInt(input.value) || 0; 
    })    

    const mensaje = document.querySelector('#mensaje');

    if (total > 10) {
        mensaje.textContent = "Llevas demasiados stickers";
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = `Llevas ${total} stickers`;
        mensaje.style.color = 'green';
    }
}

const input = document.querySelectorAll('.sticker-input');
input.forEach(input => {
    input.addEventListener('input', actualizarStickers);
})