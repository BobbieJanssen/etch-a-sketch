
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");

    const container = document.querySelector("#grid-container");
    const colorPicker = document.getElementById("colorPicker");
    let selectedColor = colorPicker.value; // Initialize with the default color

    // Create the grid of squares
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const square = document.createElement("div");
            square.className = "square";

            // Alternate color for checkerboard pattern
            if ((i + j) % 2 === 0) {
                square.style.backgroundColor = "gray";
            } else {
                square.style.backgroundColor = "white";
            }

            container.appendChild(square);
        }
    }

    // Update color when color picker changes
    colorPicker.addEventListener("input", (event) => {
        selectedColor = event.target.value;
    });

    // Add hover effect
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = selectedColor;
        });
    });
});
