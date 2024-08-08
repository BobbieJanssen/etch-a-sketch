document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    const container = document.querySelector("#grid-container");

    // Create 16x16 grid of squares
    for (let i = 0; i < 16 * 16; i++) {
        const square = document.createElement("div");
        square.className = "square";

     // Alternate colors for checkerboard pattern
        const row = Math.floor(i / 16);
        const col = i % 16;

        console.log(`Row: ${row}, Col: ${col}, Index: ${i}`);

        if ((row + col) % 2 === 0) {
            square.style.backgroundColor = "transparant";
        } else {
            square.style.backgroundColor = "white";
        }
        
        container.appendChild(square);
    }

    const colorPicker = document.getElementById("colorPicker");
    let selectedColor = colorPicker.value;

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
        
    

    

    
