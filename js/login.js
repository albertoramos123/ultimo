document.getElementById('submit').addEventListener('click', function() {
    var loginType = document.getElementById('loginType').value;
    var username = document.getElementById('username').value; 
    var password = document.getElementById('password').value;

    if (loginType === 'padaria') {
        if (username === 'padariaUser' && password === 'padariaSenha') {
            window.location.href = '/relatorios.html';
        } else {
            alert('Login Inválido.');
        }
    } else if (loginType === 'lanchonete') {
        if (username === 'lanchoneteUser' && password === 'lanchoneteSenha') {
            window.location.href = '/produtos.html';
        } else {
            alert('Login Inválido.'); 
        }
    }
});
