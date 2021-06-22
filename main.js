let gridContainer = document.querySelector('#gridContainer');
let sliderContainer = document.querySelector('.sliderContainer');
let isClicked = false; //**CHEATING**
let color = "black";
let currentlyActiveBtn;

let slider = document.createElement('input')
slider.setAttribute("type", "range");
slider.classList.add("rangeInput");
slider.min = 1;
slider.max = 40;
slider.defaultValue = 16;
slider.addEventListener('input', function(){
    textValue.textContent = "Grid Size: " + slider.value;
    GridSize();  
});

gridContainer.style.cssText = `display: grid; grid-template-columns: repeat(${slider.value}, 1fr); grid-template-rows: repeat(${slider.value}, 1fr); justify-content: center; width: 900px;  height: 900px;`


//function for making 1 square
function SquareMaker(){
    let divGrid = document.createElement('div');
    divGrid.classList.add('square');
    divGrid.style.cssText = 'background-color: white; width: 100%; height: 100%; border: 0.1px solid black;'
    gridContainer.appendChild(divGrid)
    divGrid.addEventListener("mouseover", ChangeColor);
    divGrid.addEventListener("click", CheckIfClicked); //**CHEATING**

}

function GridSize(){
    let deleteSquares = document.getElementsByClassName('square');
    for (i = deleteSquares.length-1; i >= 0; i--){
        gridContainer.removeChild(deleteSquares[i]);
    };
    gridContainer.style.cssText = `display: grid; grid-template-columns: repeat(${slider.value}, 1fr); grid-template-rows: repeat(${slider.value}, 1fr); justify-content: center; width: 900px;  height: 900px;`
    for (i = 0; i < slider.value; i++){

        for (j = 0; j < slider.value; j++){
        
        SquareMaker();
        }
    } 
}

// loop talking about 256 squares
for (i = 0; i < slider.value; i++){

    for (j = 0; j < slider.value; j++){
    
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
    tmpBtn.style.backgroundColor = "white";
    tmpBtn.type = 'button';
    tmpBtn.classList.add(name.toLowerCase());
    tmpBtn.addEventListener('click', function(){
        if(currentlyActiveBtn){
            currentlyActiveBtn.style.backgroundColor = "white";
        }
        SetNewColor(color);
        isClicked = false;
        tmpBtn.style.backgroundColor = "#add8e6";
        if(clear){
            ClearGrid();
        }
        currentlyActiveBtn = tmpBtn;
    });
}
CreateBtn("Reset", "black", true);
CreateBtn("Red", "red", false,);
CreateBtn("Black", "black", false);
CreateBtn("Eraser", "white", false);

document.body.append(slider);

let textValue = document.createElement('p');
document.body.appendChild(textValue);
textValue.textContent = "Grid Size: " + slider.value;  

//resets the divs back to white
function ClearGrid(){
    let divList = gridContainer.getElementsByClassName('square');
    for (i = 0; i < divList.length; i++){
        divList[i].style.backgroundColor = "white";
    }  
}