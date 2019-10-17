var height = 0
var width = 0
var lifes = 1
var time = 25

var flyCreateTimer = 1500


var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    flyCreateTimer
} else if (nivel === 'dificil') {
    flyCreateTimer = 1000
} else if (nivel === 'chuckNorris') {
    flyCreateTimer = 750
}


function adjustingSize  () {
    height = window.innerHeight
    width = window.innerWidth

    console.log(height, width)
}
adjustingSize()

var timer = setInterval(function () {
    time -= 1
    
    if(time < 0) {
        clearInterval(timer)
        clearInterval(createFly)
        window.location.href = 'win.html'
    } else {
        document.getElementById('timer').innerHTML = time
    }
}, 1000)


function randomPosition (){

    

    //Remover o mosquito anterior (caso exista) 
    var bug = document.getElementById('fly')

    if (bug) {
        bug.remove()

        //console.log('l' + lifes)
        
        if (lifes === 3) {
            window.location.href = 'game_over.html'
        } else {
            document.getElementById('l' + lifes).src= './src/coracao_vazio.png'

            lifes ++
        }

    }

    var positionX = Math.floor(Math.random() * width) - 90
    var positionY = Math.floor(Math.random() * height) - 90

    positionX = (positionX < 0 ? 0 : positionX)
    positionY = (positionY < 0 ? 0 : positionY)

    console.log(positionX, positionY)

    // Criar o elemento html
    var fly = document.createElement("img")
    fly.src = './src/mosca.png' 
    fly.className = flyRandomSize () + ' ' + flyRandomSide ()
    fly.style.left = positionX + 'px'
    fly.style.top = positionY + 'px'
    fly.style.position = 'absolute'
    fly.id = 'fly'
    fly.onclick = function() {
        this.remove()
    }

    document.body.appendChild(fly)
}

function flyRandomSize () {
    var flyClass = Math.floor(Math.random () * 3)

    switch(flyClass) {
        case 0:
            return 'fly1'
        case 1:
            return 'fly2'

        case 2:
            return 'fly3'
    }

}

function flyRandomSide () {
    var flyClassSide = Math.floor(Math.random () * 2)

    switch(flyClassSide) {
        case 0:
            return 'sideA'
        case 1:
            return 'sideB'

    }
}

function startGame() {
    var nivel = document.getElementById('nivel').value
    
    if(nivel === ''){
        alert('Selecione um nível para iniciar o jogo')
        return false
    }
    
    window.location.href = './app.html?' + nivel

}
