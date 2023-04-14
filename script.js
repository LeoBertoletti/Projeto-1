let dataGlobal;
const URL = "https://openexchangerates.org/api/latest.json?app_id=082ffb407a9d4a75a14e9ffcab14a77e";

const getData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    dataGlobal = data;
    return data;
};

(async () => {
    await getData();


})();