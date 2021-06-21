let gridContainer = document.querySelector('#gridContainer');
gridContainer.style.cssText = 'border: 0px solid black'

//function for making 1 square
function squareMaker(){
    let divGrid = document.createElement('div');
    divGrid.classList.add('square');
    divGrid.style.cssText = 'background-color: white; width: 50px; height: 50px; border: 1px solid black;'
    gridContainer.appendChild(divGrid)
}

//loop creating 256 squares
for (i = 0; i < 16; i++){

    for (j = 0; j < 16; j++){
    
    squareMaker();
    }
}


