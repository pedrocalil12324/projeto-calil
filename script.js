document.querySelectorAll('.btn-proximo').forEach(button => {
    button.addEventListener('click', () => {
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + button.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    });
});
