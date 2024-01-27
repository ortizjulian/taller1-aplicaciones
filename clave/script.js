const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const inputRef = document.getElementById("password-input");
const gridContainerRef = document.getElementById("grid");

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createNumberElement(number) {
    const numberElement = document.createElement("div");
    numberElement.classList.add("number-container");
    numberElement.id = `number_${number}`;
    numberElement.textContent = number;
    numberElement.onclick = function () {
        writeInInput(number);
    };
    numberElement.onmouseover= function () {
        hideContent();
    };
    numberElement.onmouseout= function () {
        showContent();
    };
    return numberElement;
}

function createDeleteElement() {
    const deleteElement = document.createElement("div");
    deleteElement.classList.add("delete-box");
    deleteElement.textContent = "Borrar";
    deleteElement.onclick = function () {
        deleteLastDigit();
    };
    return deleteElement;
}

function showContent(){
    numeros.forEach(number => {
        const numberRefer = document.getElementById(`number_${number}`);
        numberRefer.textContent = number;
    });
}
function hideContent(){
    numeros.forEach(number => {
        const numberRefer = document.getElementById(`number_${number}`);
        numberRefer.textContent = "*";
    });
}

function deleteLastDigit() {
    inputRef.value = inputRef.value.slice(0, -1);
}

function writeInInput(value) {
    inputRef.value += value;
}

function printNumbers() {
    shuffleArray(numeros);

    numeros.forEach(number => {
        const numberElement = createNumberElement(number);
        gridContainerRef.appendChild(numberElement);
    });

    const deleteElement = createDeleteElement();
    gridContainerRef.appendChild(deleteElement);
}

printNumbers();
