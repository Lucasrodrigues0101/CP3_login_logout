// Lista de credenciais válidas
var validCredentials = [
    { email: "Lucas@gmail.com", password: "lucas123" },
    { email: "admin", password: "admin" },
    { email: "zedasCouve@gmail.com", password: "couve123" }
];

// Armazenar as credenciais no localStorage
localStorage.setItem("validCredentials", JSON.stringify(validCredentials));

// Função para validar o login
function validateLogin() {
    // Obter os valores inseridos pelo usuário
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Verificar se os campos não estão vazios
    if (email.trim() === "" || password.trim() === "") {
        displayErrorMessage("Por favor, preencha todos os campos.");
        return;
    }

    // Obter a lista de credenciais do localStorage
    var storedCredentials = JSON.parse(localStorage.getItem("validCredentials"));

    // Verificar se os dados correspondem a alguma credencial válida
    var isValid = storedCredentials.some(function(credential) {
        return credential.email === email && credential.password === password;
    });

    if (isValid) {
        displaySuccessMessage("Login bem-sucedido!");
        // Redirecionar para a página de sucesso após 5 segundos
        setTimeout(function() {
            window.location.href = "index.html";
        }, 5000);
    } else {
        displayErrorMessage("Credenciais inválidas. Tente novamente.");
    }
}

// Função para exibir mensagem de sucesso
function displaySuccessMessage(message) {
    var messageElement = document.createElement("p");
    messageElement.textContent = message;
    messageElement.style.color = "green";
    document.body.appendChild(messageElement);
    // Remover a mensagem após 5 segundos
    setTimeout(function() {
        document.body.removeChild(messageElement);
    }, 5000);
}

// Função para exibir mensagem de erro
function displayErrorMessage(message) {
    var messageElement = document.createElement("p");
    messageElement.textContent = message;
    messageElement.style.color = "red";
    document.body.appendChild(messageElement);
    // Remover a mensagem após 5 segundos
    setTimeout(function() {
        document.body.removeChild(messageElement);
    }, 5000);
    
}

