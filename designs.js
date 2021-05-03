// Select color input
const colourPicker = document.querySelector("#colorPicker");
// Select pixel grid
const pixelCanvas = document.querySelector("#pixelCanvas");
// Select sumbit button
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
}; 

// When pixel is clicked by the user, call pixelFill()
pixelCanvas.addEventListener("click", pixelFill);

// Make pixel fill function
function pixelFill(event) {
    console.log("This event is firing."); + event.target.textContent; /* update style here */
};
