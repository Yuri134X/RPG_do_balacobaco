const form = document.getElementById('form');
        const errorMessage = document.getElementById('error-message');

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            if (password !== confirmPassword) {
                errorMessage.textContent = 'As senhas não são iguais.';
                errorMessage.style.display = 'block';
            } else {
                alert('Formulário enviado com sucesso!');
            }
        });