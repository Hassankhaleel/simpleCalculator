// function Getting_Value(numbers) {
//     Dispaly.value += numbers;
// }
// function ClaCulate_Value() {
//     Dispaly.value = eval(Dispaly.value)
// }
// function CLearAll() {
//     Dispaly.value = "";
// }
// var Dispaly = document.getElementById("display");
// function MinusOne() {
//     Dispaly.value = Dispaly.value.slice(0, Dispaly.value.length - 2)

// }
// function m2() {
//     Dispaly.value = (Dispaly.value) * (Dispaly.value)
// }



// ----------------

var display = document.getElementById("res");
function show(numbers) {
    display.value += numbers;
}
function cal() {
    display.value = eval(display.value);
}
function ac() {
    display.value = '';
}
function squaring() {
    display.value = eval(display.value * display.value)
}