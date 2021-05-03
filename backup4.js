/*
- The problem I'm having is that I can't colour individual table cells.
- I cannot get event to fire when pixelCell (pointed at 'td') is the target.
- I can only get event to fire when 'pixelCanvas' is the target
- This means I cannot colour individual cells.
- Please help, any feedback would be much appreciated
*/

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
pixelCell.addEventListener("click", pixelFill);

// Make pixel fill function
function pixelFill(event) {
    let colourPicker = document.querySelector("#colorPicker").value;
    event.target.style.backgroundColour = colourPicker;
    console.log("This event fires but it doesn't colour sh*t! " + colourPicker);
};

// Select pixel cell (won't allow because grid has not been generated)
const pixelCell = document.querySelector("td");