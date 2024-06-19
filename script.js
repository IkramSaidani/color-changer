document.addEventListener("DOMContentLoaded", () => {
    const colorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change-color-btn");

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const a = Math.random();
        return `rgba(${r}, ${g}, ${b}, ${a.toFixed(2)})`;
    }
    changeColorBtn.addEventListener("click", () => {
        colorBox.style.backgroundColor = getRandomColor();
    })


})