const secoes = document.querySelectorAll('.secao');
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
let secaoAtual = 0;

// Função para gerenciar os estados dos botões
function mostrarOuEsconderSetas() {
    if (secaoAtual === 0) {
        btnLeft.classList.add("opacity");
        btnLeft.disabled = true;
    } else {
        btnLeft.classList.remove("opacity");
        btnLeft.disabled = false;
    }

    if (secaoAtual === secoes.length - 1) {
        btnRight.classList.add("opacity");
        btnRight.disabled = true;
    } else {
        btnRight.classList.remove("opacity");
        btnRight.disabled = false;
    }
}


btnRight.addEventListener('click', function () {
    if (secaoAtual < secoes.length - 1) {
        secoes[secaoAtual].style.zIndex = 0;
        secaoAtual++;
        secoes[secaoAtual].style.zIndex = 3;
        mostrarOuEsconderSetas();
    }
});


btnLeft.addEventListener('click', function () {
    if (secaoAtual > 0) {
        secoes[secaoAtual].style.zIndex = 0;
        secaoAtual--;
        secoes[secaoAtual].style.zIndex = 3;
        mostrarOuEsconderSetas();
    }
});

mostrarOuEsconderSetas();

