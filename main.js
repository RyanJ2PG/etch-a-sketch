let gridContainer = document.querySelector('#gridContainer');
let isClicked = false; //**CHEATING**
let color = "black";



//function for making 1 square
function SquareMaker(){
    let divGrid = document.createElement('div');
    divGrid.classList.add('square');
    divGrid.style.cssText = 'background-color: white; width: 50px; height: 50px; border: 1px solid black;'
    gridContainer.appendChild(divGrid)
    divGrid.addEventListener("mouseover", ChangeColor);
    divGrid.addEventListener("click", CheckIfClicked); //**CHEATING**

}

//loop creating 256 squares
for (i = 0; i < 16; i++){

    for (j = 0; j < 16; j++){
    
    SquareMaker();
    }
}

//**CHEATING**
function CheckIfClicked(e){
    if (e.buttons == 0){
        isClicked = !isClicked;
        this.style.backgroundColor = color;
    }
}

//changes the color of the divs
function ChangeColor(){
    if (isClicked){
        this.style.backgroundColor = color;
    }
}

function SetNewColor(newColor){
    color = newColor;
}

function CreateBtn(name, color, clear){
    let tmpBtn = document.createElement('button');
    let tmpBtnText = document.createTextNode(name);
    tmpBtn.appendChild(tmpBtnText);
    document.body.appendChild(tmpBtn);
    tmpBtn.type = 'button';
    tmpBtn.classList.add(name.toLowerCase());
    tmpBtn.addEventListener('click', function(){
        SetNewColor(color);
        isClicked = false;
        if(clear){
            ClearGrid();
        }
    });
}
CreateBtn("Reset", "black", true);
CreateBtn("Red", "red", false,);
CreateBtn("Black", "black", false);
CreateBtn("Eraser", "white", false);




//resets the divs back to white
function ClearGrid(){
    let divList = gridContainer.getElementsByClassName('square');
    for (i = 0; i < divList.length; i++){
        divList[i].style.backgroundColor = "white";
    }  
}