function selectNumber() {
    const min = Math.ceil(document.getElementById("inputMin").value);
    const max = Math.floor(document.getElementById("inputMax").value);

    if (min >= max) {
        alert("O valor mínimo, não pode ser maior ou igual que o valor máximo")
    } else {

        const result = Math.floor(Math.random() * (max - min + 1)) + min;

        const drawnNumber = document.getElementById("ResultNumber");
        drawnNumber.innerHTML = result;
        drawnNumber.style.color = white;
    }




}