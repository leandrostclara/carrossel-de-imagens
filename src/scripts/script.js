const setaAvancar = document.querySelector('.seta-avancar')
const setaVoltar = document.querySelector('.seta-voltar')
const imagemRosa = document.querySelector('.imagem-rosa')
const imagemVerde = document.querySelector('.imagem-verde')
const imagemMontanhas = document.querySelector('.imagem-montanhas')
const imagemLago = document.querySelector('.imagem-lago')


setaAvancar.addEventListener('click', passarImagem)

function passarImagem() {
    
    if (imagemRosa.classList.contains('imagem-ativa')) {

        imagemRosa.classList.remove('imagem-ativa')
        imagemVerde.classList.add('imagem-ativa')
        setaVoltar.style.opacity = 1

    } else if (imagemVerde.classList.contains('imagem-ativa')) {

        imagemVerde.classList.remove('imagem-ativa')
        imagemMontanhas.classList.add('imagem-ativa')

    } else if (imagemMontanhas.classList.contains('imagem-ativa')) {

        imagemMontanhas.classList.remove('imagem-ativa')
        imagemLago.classList.add('imagem-ativa')
        setaAvancar.style.opacity = 0.4

    }
}

setaVoltar.addEventListener('click', voltarImagem)

function voltarImagem() {

    if (imagemLago.classList.contains('imagem-ativa')) {

        imagemLago.classList.remove('imagem-ativa')
        imagemMontanhas.classList.add('imagem-ativa')
        setaAvancar.style.opacity = 1

    } else if (imagemMontanhas.classList.contains('imagem-ativa')) {

        imagemMontanhas.classList.remove('imagem-ativa')
        imagemVerde.classList.add('imagem-ativa')

    } else if (imagemVerde.classList.contains('imagem-ativa')) {

        imagemVerde.classList.remove('imagem-ativa')
        imagemRosa.classList.add('imagem-ativa')
        setaVoltar.style.opacity = 0.4

        

    }

}