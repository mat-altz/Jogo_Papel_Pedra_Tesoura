const jog = document.getElementById('jog')
const comp = document.getElementById('comp')
const resultado = document.getElementById('resultado')
let vitorias = 0
let empate = 0


function pedra(){
    jog.innerHTML='Pedra'
    let computador = Math.floor(Math.random()* 3 + 1)
    if(computador == 1 ){
        comp.innerHTML = 'Pedra'
        resultado.innerHTML = 'Empate'
        empate++
    }else if(computador == 2){
        comp.innerHTML = 'Papel'
        window.alert(`FIM DE JOGO. Computador escolheu: Papel e Jogador escolheu: Pedra. Vitórias: ${vitorias} Empates: ${empate}`)
        novo()
    }else{
        comp.innerHTML = 'Tesoura'
        resultado.innerHTML = 'O Jogador venceu'
        vitorias ++
        }
    }


function papel(){
    jog.innerHTML='Papel'
    let computador = Math.floor(Math.random()* 3 + 1)
    if(computador == 1 ){
        comp.innerHTML = 'Pedra'
        resultado.innerHTML = 'O Jogador venceu'
        vitorias++
    }else if(computador == 2){
        comp.innerHTML = 'Papel'
        resultado.innerHTML='Empate'
        empate++
    }else{
        comp.innerHTML = 'Tesoura'
        window.alert(`FIM DE JOGO. Computador escolheu: Tesoura e Jogador escolheu: Papel. Vitórias: ${vitorias} Empates: ${empate}`)
        novo()
        }
}

function tesoura(){
    jog.innerHTML='Tesoura'
    let computador = Math.floor(Math.random()* 3 + 1)
    if(computador == 1 ){
        comp.innerHTML = 'Pedra'
        window.alert(`FIM DE JOGO. Computador escolheu: Pedra e Jogador escolheu: Tesoura. Vitórias: ${vitorias} Empates: ${empate}`)
        novo()
    }else if(computador == 2){
        comp.innerHTML = 'Papel'
        resultado.innerHTML = 'O jogador venceu.'
        vitorias++
    }else{
        comp.innerHTML = 'Tesoura'
        resultado.innerHTML = 'Empate'
        empate++
        }
}

function novo(){
    window.location.reload(true)
}