const container = document.querySelector("#container")
const containerGrid = document.querySelector("#container-grid")
const newGrid = document.querySelector("#new-grid")
const inputField = document.querySelector("#input-cells")



createGrid(16);

function createCell(){
    const gridCellX = document.createElement("div")
    gridCellX.classList.add("grid-cell")
    gridCellX.addEventListener("mousemove", () =>{
        gridCellX.classList.add("drawn-cell")
    })
    
    
    containerGrid.appendChild(gridCellX)


}

function createGrid(cells){
    for (i = 0; i < cells; i++){
        for(j = 0; j < cells; j++){
            createCell();
        }
    }
}

newGrid.addEventListener("click", () => {
    containerGrid.innerHTML = '';
    const inputCell = inputField.value
    inputField.value = ''

    createGrid(inputCell);

    //Alternative way to remove all child nodes from containerGrid
    /* 
    const cell = document.querySelector(".grid-cell")
    while (containerGrid.cell) {
        containerGrid.removeChild(cell)
    } */
    
})





