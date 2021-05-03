// Select color input
// Select size input
// Select sumbit button
const colourPicker = document.querySelector("#colorPicker");
const pixelCanvas = document.querySelector("#pixelCanvas");
const submitButton = document.querySelector("#sizePicker input[type=submit]")

// When size is submitted by the user, call makeGrid()
submitButton.addEventListener("click", function() {
    makeGrid();
});

// Make grid function (using comments for separation)
function makeGrid() {

    // Loop creates "tr"
    for (let x = 0; x < 10; x++) {
        let row = document.createElement("tr");

        // Loop creates "td"
        for (let y = 0; y < 10; y++) {
            let cell = document.createElement("td");
            row.appendChild(cell);
        }
        // finally, add updated row to table element
        pixelCanvas.appendChild(row);
    }
}; 
