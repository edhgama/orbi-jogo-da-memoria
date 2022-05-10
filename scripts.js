let order = [];
let clickedOrder = []
let score = 0

// 0 - verde, 1 - vermelho, 2- amarelo, 3-azul

const dblue = document.querySelector('.dblue')
const dred = document.querySelector('.dred')
const dyellow = document.querySelector('.dyellow')
const dgreen = document.querySelector('.dgreen')

// cria ordem aleatoria
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random) * 4;
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let inc in order) {
        let elementColor = createColorElement(order(inc))
        lightColor(elementorColor, number(inc+1));
    }

}

// poe destaque no elemento 
let lightColor = (element, tempo) => {
    tempo = tempo * 500;
    setTimeout(()=>{
        element.classList.add('selected');
    }, tempo -250)
    setTimeout(()=>{
        element.classList.remove('selected');
    }, tempo - 250)    
}

let checkOrder = () => {
    for(let inc in clickedOrder){
        if(clickedOrder[inc] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação ${score}`)
        nextLevel();
    }


}

// funcao click usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    elementColor(color).classList.add(`selected`);

    setTimeout(() => {
        elementColor(color).classList.remove(`selected`);
        checkOrder();
    }, 250)

    
}

// retorna a cor 
let createColorElement = (color) => {
    if(color == 0){
        return dgreen;
    }else if (color == 1) {
        return dred;
    }  else if (color == 2) {
        return dyellow;
    }  else if (color == 3) {
        return dblue;
    }
}

// gamecontrol

let nextLevel = () => {
    score++;
    shuffleOrder();
}

let gameOver = () => {
    alert(`score: ${score} \n vocë perdeu o jogo.`);
    order = [];
    clickedOrder = [];
    
    playGame();
}

let playGame = () => {
    score = 0;

    nextLevel();
}

// dgreen.addEventListener('click', click(0))
// dred.addEventListener('click', click(1))
// dyellow.addEventListener('click', click(2))
// dblue.addEventListener('click', click(3))

dgreen.onclick = () => click[0];
dred.onclick = () => click[1];
dyellow.onclick = () => click[2];
dblue.onclick = () => click[3];

playGame();