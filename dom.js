
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");

    const container = document.querySelector(".grid-container");
    for (let i = 0; i < 16 * 16; i++) {
        const square = document.createElement ("div");
        square.classList.add("square");
        container.appendChild(square);
    }

    const squares = document.querySelectorAll(".square");
    const colorPicker = document.getElementById("colorPicker");

    
    colorPicker.addEventListener('input', (event) => {
        const selectedColor = event.target.value;

        squares.forEach(square => {
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = selectedColor;
            });
            square.addEventListener('mouseout', () => {
                square.style.backgroundColor = ''; // Optional: Reset color on mouse out
            });
        });
    });
});

