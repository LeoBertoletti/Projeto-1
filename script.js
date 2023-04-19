const URL = "https://openexchangerates.org/api/latest.json?app_id=082ffb407a9d4a75a14e9ffcab14a77e";
let inValue = document.getElementById('inValue')
let outValue = document.getElementById("outValue")
let inCurrency = document.getElementById("inCurrency")
let outCurrency = document.getElementById("outCurrency")

const getData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    dataGlobal = data;
    return data;
};

const converter = (id) => {
    // converte o valor presente em inValue ou outValue pelas moedas selecionadas
    //sempre imprimindo na outra caixa
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
        const element_OptionIn = document.createElement("option")
        const element_OptionOut = document.createElement("option")
        element_OptionIn.textContent = option
        element_OptionOut.textContent = option
        inCurrency.appendChild(element_OptionIn)
        outCurrency.appendChild(element_OptionOut)
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