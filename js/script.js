// Consegna L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

const button = document.querySelector('.btn');

button.addEventListener("click",
    function() {
        const container = document.querySelector('.container_box');
        const range = document.getElementById('level').value;
        container.innerHTML = '';
        
        switch(range) {
            case '1':
                for(let i = 1; i <= 100; i++) {
                    container.innerHTML += `<div class="box easy">${i}</div>`;
                }

                break;
            case '2':
                for(let i = 1; i <= 81; i++) {
                    container.innerHTML += `<div class="box hard">${i}</div>`;
                }    

                break;
            case '3':
                for(let i = 1; i <= 49; i++) {
                    container.innerHTML += `<div class="box extreme">${i}</div>`;
                } 
                break;
          } 

    }
);

