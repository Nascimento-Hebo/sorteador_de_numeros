function selectNumber() {
    const min = Math.ceil(document.getElementById("inputMin").value);
    const max = Math.floor(document.getElementById("inputMax").value);

    if (min > max) {
        alert("O campo mínimo, não pode ser maior que o campo máximo")
    } else if (min == max) {
        alert("Os dois campos não podem ter números iguais")
    } else if (min == "" || max == "") {
        alert("Não pode ter campo vazio");
    } else {

        const result = Math.floor(Math.random() * (max - min + 1)) + min;

        const drawnNumber = document.getElementById("ResultNumber");
        drawnNumber.innerHTML = result;
        drawnNumber.style.color = white;
    }




}