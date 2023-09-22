texto = document.getElementById("text-intento");
btn = document.getElementById("btn");
resultado = document.getElementById("resultado");
btn.addEventListener("click", Sigilo);

function Sigilo() {
    const criarMantra = (texto) => {
        // Remover espaços em branco e caracteres especiais
        texto = texto.replace(/\W+/g, '').toLowerCase();

        // Remover letras repetidas
        const letrasUnicas = [];
        for (let letra of texto) {
            if (texto.split(letra).length - 1 === 1) {
                letrasUnicas.push(letra);
            }
        }

        // Criar o mantra
        const mantra = letrasUnicas.join('');

        return mantra;
    };

    const mantra = criarMantra(texto.value);
    const mantraMaiusculo = mantra.toUpperCase();
    resultado.textContent = "O seu sigilo é: "  + mantraMaiusculo;
}
