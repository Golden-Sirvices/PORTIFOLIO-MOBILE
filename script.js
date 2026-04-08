// EFEITO ESCRITA
const typewriter = document.getElementById('typewriter');
const text = "Desenvolvedor de Sistemas | Aluno 2026";
let i = 0;

function type() {
    if (i < text.length) {
        typewriter.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 100);
    }
}

// LÓGICA DO SLIDER (PARA MÚLTIPLOS PROJETOS)
// Criamos um objeto para guardar o índice de cada atividade separadamente
const slideIndices = {
    atv1: 0,
    atv2: 0,
    atv3: 0
};

function mudarSlide(idAtividade, direcao) {
    const slides = document.querySelectorAll(`.slide-${idAtividade}`);
    
    // Esconde o slide atual
    slides[slideIndices[idAtividade]].classList.remove('active');
    
    // Calcula o próximo índice
    slideIndices[idAtividade] = (slideIndices[idAtividade] + direcao + slides.length) % slides.length;
    
    // Mostra o novo slide
    slides[slideIndices[idAtividade]].classList.add('active');
}

window.onload = type;