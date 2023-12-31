const contents = document.getElementById('contents');
const countryLinks = document.getElementById('country-links')
const info = document.getElementById('info');

const fetchButton = document.getElementById('fetch-button');
fetchButton.addEventListener('click', () => {fetchData()});

async function fetchData() {
    const language = document.getElementById('language-input').value;
    info.innerHTML = "";

    try {
        let response = await fetch('https://restcountries.com/v3.1/lang/' + language);
        let data = await response.json();
        let countries = data.map(element => element.name.common);
        countryLinks.innerText = "";
        console.log(countries)

        for(const country of countries) {
            const name = document.createElement('a');
            name.classList.add('link');
            name.href = "#";
            name.innerText = country;
            countryLinks.append(name);
            contents.prepend(countryLinks);

            name.addEventListener('click', fetchCountry)
        }
    } catch(error) {
        alert(`Please enter a language. Make sure it's spelled correctly.`);
    };

};


async function fetchCountry(e) {
    let response = await fetch('https://restcountries.com/v3.1/name/' + e.target.innerText)
    let data = await response.json();

    if(data[0].coatOfArms.png) {
        info.innerHTML = `
        <div class="images">
            <img src="${data[0].flags.png}" id="flag">
            <img src="${data[0].coatOfArms.png}" id="CoA">
        </div>
        <h1>${data[0].name.official}</h1>
        <i>Commonly known as ${data[0].name.common}.</i>
        <h4>${data[0].subregion}</h4>
        <p>The capital of ${data[0].name.common} is ${data[0].capital}
        <br>and its people speak ${Object.values(data[0].languages)}.</p>
        `
    } else {
        info.innerHTML = `
        <div class="images">
            <img src="${data[0].flags.png}" id="flag">
        </div>
        <h1>${data[0].name.official}</h1>
        <i>Commonly known as ${data[0].name.common}.</i>
        <h4>${data[0].subregion}</h4>
        <p>The capital of ${data[0].name.common} is ${data[0].capital}
        <br>and its people speak ${Object.values(data[0].languages)}.</p>
        `
    };
};