const URL = "https://openexchangerates.org/api/latest.json?app_id=082ffb407a9d4a75a14e9ffcab14a77e";

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

(async () => {
    //await getData();
    const valor1 = document.getElementById("valor1")
    const valor2 = document.getElementById("valor2")
    const moeda1 = document.getElementById("moeda1")
    const moeda2 = document.getElementById("moeda2")
    const botao = document.getElementById("botao")

})();