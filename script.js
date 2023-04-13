/*
const options = { method: 'GET', headers: { accept: 'application/json' } };

fetch('https://openexchangerates.org/api/latest.json?app_id=082ffb407a9d4a75a14e9ffcab14a77e', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
*/
async function foo() {
    let obj;

    const res = await fetch('https://openexchangerates.org/api/latest.json?app_id=082ffb407a9d4a75a14e9ffcab14a77e')

    obj = await res.json();

    return obj
}

data = foo()
