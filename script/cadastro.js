document.getElementById('register-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const characterName = document.getElementById('character-name').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            characterName,
            password,
            confirmPassword
        })
    });

    const result = await response.json();

    if (response.ok) {
        alert('Usuário cadastrado com sucesso!');
    } else {
        alert('Erro: ' + result.error);
    }
});
