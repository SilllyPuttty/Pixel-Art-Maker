// Select color input
// Select size input
// Select sumbit button
const colourPicker = document.querySelector("#colorPicker");
const pixelCanvas = document.querySelector("#pixelCanvas");
const submitButton = document.querySelector("#sizePicker input[type=button]");


// When size is submitted by the user, call makeGrid()
submitButton.addEventListener("click", function() {
    let rows = document.querySelector("#inputHeight").value;
    let cells = document.querySelector("#inputWidth").value;
    makeGrid(rows, cells);
});

// Make grid function (using comments for separation)
function makeGrid(rows, cells) {

    // Removes previously generated grid (if one has been created)
    pixelCanvas.innerHTML = null

    // Loop creates "tr"
    for (let x = 0; x < rows; x++) {
        let row = document.createElement("tr");

        // Loop creates "td"
        for (let y = 0; y < cells; y++) {
            let cell = document.createElement("td");
            row.appendChild(cell);
        }
        // Adds updated rows to table element
        pixelCanvas.appendChild(row);
    }

    // Once grid is generated, user can fill cells
    const pixel = document.querySelector("#pixelCanvas");

    // When pixel is clicked by the user, call pixelFill()
    pixel.addEventListener("click", function() {
        pixelFill();
    });

    // Make pixel fill function
    function pixelFill() {
        alert("Now you can fill this cell");
    }
}; 
