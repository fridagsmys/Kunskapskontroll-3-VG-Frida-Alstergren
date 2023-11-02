const contents = document.getElementById('contents');
const info = document.getElementById('info');

const fetchButton = document.getElementById('fetch-button');
fetchButton.addEventListener('click', () => {fetchData()});

async function fetchData() {
    const language = document.getElementById('language-input').value;
    info.innerText = "";

    try {
        let response = await fetch('https://restcountries.com/v3.1/lang/' + language)
        let data = await response.json();
        let countries = data.map(element => element.name.common)
        console.log(countries)

        for(const country of countries) {
            const name = document.createElement('a');
            name.classList.add('link')
            name.href = "#"
            name.innerText = country
            contents.prepend(name)

            name.addEventListener('click', fetchCountry)
        
            console.log(country)

        }
        console.log(data)
    } catch(error) {
        alert(`Please enter a language. Make sure it's spelled correctly.`)
    }

}


async function fetchCountry(e) {
    let response = await fetch('https://restcountries.com/v3.1/name/' + e.target.innerText)
    let data = await response.json();

    info.innerHTML = `
    <img src="${data[0].flags.svg}">
    <img src="${data[0].coatOfArms.png}">
    <h1>${data[0].name.official}</h1>
    <i>Commonly known as ${data[0].name.common}.</i>
    <p>The capital of ${data[0].name.common} is ${data[0].capital} and they speak ${Object.values(data[0].languages)}.</p>
    `
    console.log(data)
}


// ERROR HANTERING & CSS