const scriptURL = 'https://script.google.com/macros/s/AKfycbywcsIM2Q2vCLDDECmeXY03CtUtFXZWsqYGxiYPqsAF95AzK2P162LXz81SiHFTIDM/exec';
const form = document.getElementById('registroForm');
const btn = document.getElementById('btnEnviar');

form.addEventListener('submit', e => {
    e.preventDefault(); 
    btn.disabled = true;
    btn.innerText = 'Procesando...';

  fetch(scriptURL, { 
        method: 'POST', 
        body: new FormData(form) 
    })
    .then(response => {
        alert('¡Felicidades! Tu registro en Academia Tech ha sido exitoso.');
        form.reset();
        btn.disabled = false;
        btn.innerText = 'Enviar Registro';
    })
    .catch(error => {
        console.error('Error!', error.message);
        alert('Ups, algo salió mal. Inténtalo de nuevo.');
        btn.disabled = false;
        btn.innerText = 'Enviar Registro';
    });
});
