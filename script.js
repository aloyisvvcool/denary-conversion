function convert() {
    let inputNumber = document.getElementById('inputNumber').value;
    document.getElementById('binaryOutput').innerHTML = parseInt(inputNumber).toString(2);
    document.getElementById('hexOutput').innerHTML = parseInt(inputNumber).toString(16).toUpperCase();

    let romanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let romanOutput = '';
    for (let i in romanNumerals) {
        while (inputNumber >= romanNumerals[i]) {
            romanOutput += i;
            inputNumber -= romanNumerals[i];
        }
    }
    document.getElementById('romanOutput').innerHTML = romanOutput;
}
