
const inputs = document.querySelectorAll(".input-cadastro");
const botaoEnviar = document.getElementById("enviar");

botaoEnviar.addEventListener("click", function (event) {
    event.preventDefault(); // Evita o envio do formulário, peguei isso no Chat GPT pois não conseguia pausar o envio para visualizar os erros.

    let formularioValido = true;

    inputs.forEach(function (input) {
        if (input.value === "") {
            formularioValido = false;
            input.classList.add("error"); // Adiciona classe para destacar o erro
        } else {
            input.classList.remove("error"); // Remove a classe se o campo estiver preenchido
        }
    });

    if (formularioValido) {
        alert("Formulário enviado com sucesso!");
    }
});
