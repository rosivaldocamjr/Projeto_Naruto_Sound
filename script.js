let audios = [
    {caminho:'audios/naruto1.mp3', legenda:'Música Luta'},
    {caminho:'audios/naruto2.mp3', legenda:'Dattebayo'},
    {caminho:'audios/naruto3.mp3', legenda:'Eu Voltei'},
    {caminho:'audios/naruto4.mp3', legenda:'Kage Bunshin'},
    {caminho:'audios/naruto5.mp3', legenda:'Naruto Kun'},
    {caminho:'audios/naruto6.mp3', legenda:'Rasengan'},
    {caminho:'audios/naruto7.mp3', legenda:'Música Triste'},
    {caminho:'audios/naruto8.mp3', legenda:'Música Superação'},
    {caminho:'audios/naruto9.mp3', legenda:'Trap Naruto'},
]

let botoes = document.querySelectorAll('.botao')
let legendas = document.querySelectorAll('p')

for (let i = 0; i < 9; i++) {
    legendas[i].textContent = audios[i].legenda
    botoes[i].setAttribute('data-item', i)
}

let audioTag = document.querySelector('audio')

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let som = audios[botao.getAttribute('data-item')]
        audioTag.setAttribute('src', som.caminho)
        
        audioTag.addEventListener('loadeddata', () => {
            audioTag.play()
        })
    })
})