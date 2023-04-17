const URL = "https://openexchangerates.org/api/latest.json?app_id=082ffb407a9d4a75a14e9ffcab14a77e";
const inValue = document.getElementById('inValue')
const outValue = document.getElementById("outValue")
const inCurrency = document.getElementById("inCurrency")
const outCurrency = document.getElementById("outCurrency")

const getData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    dataGlobal = data;
    return data;
};

const conversor = (iso1, iso2, valor) => {
    // recebe o código ISO de duas moedas como strings e retorna a conversão da iso1 para iso2
    return (dataGlobal.rates[iso2] * valor) / dataGlobal.rates[iso1]
}

const loadMoedas = (moedas) => {
    const options = Object.keys(moedas);
    options.forEach(option => {
        const fromOption = document.createElement('option');
        fromOption.textContent = option;
        listaMoedas.appendChild(fromOption);
    });
}


(async () => {
    await getData();
    loadMoedas(dataGlobal.rates);


})();