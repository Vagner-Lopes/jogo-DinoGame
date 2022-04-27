const bg = document.querySelector('.background')
const bg1 = document.querySelector('.bg1')
const bg2 = document.querySelector('.bg2')
const bg3 = document.querySelector('.bg3')
const bg4 = document.querySelector('.bg4')
const bg5 = document.querySelector('.bg5')
let dino;
let dino2;
let alturaPulo = 10
const timeJogo = 20
let subindo = false
let descendo = false
document.addEventListener('keydown', tecla)
//document.addEventListener('keyup', tecla)

function tecla(e) {
    if (e.code == 'Space' && !subindo) {
        pular()
    }
}

function start() {
    criarDino()
    criarCactus()
}
start()

function pular() {
    let tempoUp = setInterval(() => {
        if (!descendo && alturaPulo < 160) {
            subindo = true
            alturaPulo += 15
            dino.style.bottom = `${alturaPulo}px`
        } else {
            descendo = true
            alturaPulo -= 10
            dino.style.bottom = `${alturaPulo}px`
            if (alturaPulo <= 10) {
                subindo = false
                descendo = false
                clearInterval(tempoUp)
                tempoUp = null
            }
        }
    }, timeJogo)
}
function criarDino() {
    dino = document.createElement('div')
    dino.classList.add('dino')
    bg.appendChild(dino)
}

function criarCactus() {
    let cactusPosition = 1300
    const cactus = document.createElement('div')
    cactus.classList.add('cactus')
    cactus.style.left = `${cactusPosition}px`
    bg.appendChild(cactus)

    let moveCactus = setInterval(() => {
        if (cactusPosition < -60) {
            clearInterval(moveCactus)
            bg.removeChild(cactus)
        } else if( cactusPosition > 40 && cactusPosition < 110 ) {
            if ( alturaPulo < 80 ) {
                document.body.innerHTML = '<h1 class="fim"> Fim de Jogo </h1>'
                clearInterval(moveCactus)
            }
            cactusPosition -= 10
            cactus.style.left = `${cactusPosition}px`
        } else {
            cactusPosition -= 10
            cactus.style.left = `${cactusPosition}px`
        }

    }, timeJogo)
    let random = Math.random() * 3000 + 2000
    setTimeout( criarCactus, random )
}