document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    const container = document.querySelector("#grid-container");
    console.log(container.offsetWidth, container.offsetHeight);
    // Create 16x16 grid of squares
    for (let i = 0; i < 16 * 16; i++) {
        const square = document.createElement("div");
        square.className = "square";
       // console.log("Total squares created:", document.querySelectorAll(".square").length);

     // Alternate colors for checkerboard pattern
        const row = Math.floor(i / 16);
        const col = i % 16;

        if ((row + col) % 2 === 0) {
            square.style.backgroundColor = "transparant";
        } else {
            square.style.backgroundColor = "white";
        }

        container.appendChild(square);
    }

     // Add hover effect
    const colorPicker = document.getElementById("colorPicker");
    let selectedColor = colorPicker.value;

     // Update color when color picker changes
     colorPicker.addEventListener("input", (event) => {
        selectedColor = event.target.value;
    });

    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = selectedColor;
        });
      });
    });
        
    

    

    
