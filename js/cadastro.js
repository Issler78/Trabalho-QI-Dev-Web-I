const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    localStorage.setItem('usuario', nome);

    form.submit();
});