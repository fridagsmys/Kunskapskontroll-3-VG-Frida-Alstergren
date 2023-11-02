const contents = document.getElementById('contents');

const fetchButton = document.getElementById('fetch-button');
fetchButton.addEventListener('click', () => {fetchData()});

async function fetchData() {
    const language = document.getElementById('language-input').value;

    try {
        let response = await fetch('https://restcountries.com/v3.1/lang/' + language)
        let data = await response.json();
        let countries = data.map(element => element.name.official)
        console.log(countries)

        for(const country of countries) {
            const name = document.createElement('a')
            name.href = "#"
            name.innerText = country
            document.getElementById('contents').append(name)
        
            console.log(country)
        }
        console.log(data)
    } catch(error) {
        contents.innerHTML = `
            <p>Please write a language</p>
        `
    }

}


// FUNKTION FÖR ATT FÅ FRAM INFO OM LÄNDERNA MED E.TARGET

// async function langData() {
//     const lang = 

//     try {
//         let response = fetch('https://restcountries.com/v3.1/lang/' + language)
//     } catch(error) {
//         contents.innerHTML = `
//             <p>no other countries</p>
//         `
//     }
// }




// let languages = data[0].languages;
        
// contents.innerHTML = `
// <img src="${data[0].flags.svg}">
// <img src="${data[0].coatOfArms.png}">
// <h1>${data[0].name.official}</h1>
// <i>Commonly known as ${data[0].name.common}.</i>
// <p>The capital of ${data[0].name.common} is ${data[0].capital} and they speak ${Object.values(languages)}.</p>
// <p>Language isn't restricted by borders, check out if there are any other countries that speak ${Object.values(languages)}!</p>
// <button type="button" id="lang-button">${Object.values(languages)} speaking countries</button>
// `
// console.log(data)