let gridContainer = document.querySelector('#gridContainer');
gridContainer.style.cssText = 'border: 1px solid black'

function squareMaker(){
    let divGrid = document.createElement('div');
    divGrid.classList.add('square');
    divGrid.style.cssText = 'background-color: red; width: 50px; height: 50px; border: 1px solid black;'
    gridContainer.appendChild(divGrid)
}

for (i = 0; i < 16; i++){
    squareMaker();
}


