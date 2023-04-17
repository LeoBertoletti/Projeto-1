const URL = "https://openexchangerates.org/api/latest.json?app_id=082ffb407a9d4a75a14e9ffcab14a77e";
let inValue = document.getElementById('inValue')
let outValue = document.getElementById("outValue")
let inCurrency = document.getElementById("inCurrency")
let outCurrency = document.getElementById("outCurrency")

function alerta(msg) {
    alert(msg)
}

const getData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    dataGlobal = data;
    return data;
};

const converter = (id) => {
    // recebe o código ISO de duas moedas como strings e retorna a conversão da iso1 para iso2
    if (id === "inValue" || id === "inCurrency") {
        outValue.value = ((dataGlobal.rates[outCurrency.value] * inValue.value) / dataGlobal.rates[inCurrency.value]).toFixed(2)
    } else if (id === "outValue" || id === "outCurrency") {
        inValue.value = ((dataGlobal.rates[inCurrency.value] * outValue.value) / dataGlobal.rates[outCurrency.value]).toFixed(2)
    }
}

const loadMoedas = (moedas) => {
    // carrega códigos ISO do json recebido
    const options = Object.keys(moedas);
    options.forEach(option => {
        const fromOption = document.createElement('option');
        fromOption.textContent = option;
        listaMoedas.appendChild(fromOption);
    });
}

(async () => {
    await getData();
    loadMoedas(dataGlobal.rates)
    inValue.addEventListener("input", function () { converter(this.id) })
    outValue.addEventListener("input", function () { converter(this.id) })
    inCurrency.addEventListener("input", function () { converter(this.id) })
    outCurrency.addEventListener("input", function () { converter(this.id) })

})();