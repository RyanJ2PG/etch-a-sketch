let gridContainer = document.querySelector('#gridContainer');

//function for making 1 square
function SquareMaker(){
    let divGrid = document.createElement('div');
    divGrid.classList.add('square');
    divGrid.style.cssText = 'background-color: white; width: 50px; height: 50px; border: 1px solid black;'
    gridContainer.appendChild(divGrid)
    divGrid.addEventListener("mouseover", ChangeColor);
}

//loop creating 256 squares
for (i = 0; i < 16; i++){

    for (j = 0; j < 16; j++){
    
    SquareMaker();
    }
}


function ChangeColor(){
    this.style.backgroundColor = "black";
}

function ClearGrid(){
    document.querySelectorAll('square');
    
}