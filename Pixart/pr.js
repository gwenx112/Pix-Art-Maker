// for submit
let sub = document.getElementById("grid");

// for make grid size
sub.addEventListener("click", function () {
    let sizeHeight = document.getElementById("inputHeight").value;
    let sizeWidth = document.getElementById("inputWidth").value;

    let rowSize = document.getElementById("rowsize").value;
    let columnSize = document.getElementById("columnsize").value;
    makeGrid(sizeHeight, sizeWidth, rowSize, columnSize);
});
//for grid
function makeGrid(sizeHeight, sizeWidth, rowSize, columnSize) {
    let tablep = document.getElementById("pixelCanvas");
    while (tablep.hasChildNodes()) {
        tablep.removeChild(tablep.firstChild);
    }
    //for loop
    for (let i = 0; i <= rowSize - 1; i++) {
        let tableRow = document.createElement("tr");
        for (let k = 0; k <= columnSize - 1; k++) {
            let tableData = document.createElement("td");

            //to select cell width
            tableData.style.width = sizeWidth + "px";
            tableData.style.height = sizeHeight + "px";
            tableRow.appendChild(tableData);

            // For inputting color in table
            tableData.addEventListener("click", function () {
                let sizeColor = document.getElementById("colorPicker").value;
                tableData.style.backgroundColor = sizeColor;

                let color = document.getElementById("colorPicker");
                color.style.backgroundColor = color.value;
            });
        }
        tablep.appendChild(tableRow);
    }
}
