const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';



buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const value = btn.textContent
        if (value === "C") {
            currentInput = currentInput.slice(0,-1)
            display.value = currentInput || "0"

        }
    })
})