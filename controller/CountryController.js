import y2015 from "../data/json/2015.json";
import y2016 from "../data/json/2016.json";
import y2017 from "../data/json/2017.json";
import y2018 from "../data/json/2018.json";
import y2019 from "../data/json/2019.json";

let yearFileMap = (year) => {
    switch (year) {
        case '2015':
            // code block
            console.log('return 2015')
            return y2015;
        case '2016':
            // code block
            console.log('return 2016')
            return y2016;
        case '2017':
            // code block
            return y2017;
        case '2018':
            // code block
            return y2018;
        case '2019':
            // code block
            return y2019;
        default:
            return y2019;
        // code block
    }
}
const CountryController = {
    getAllCountries(year) {
        return yearFileMap(year);
    },
    getCountryOptions(countries) {
        let sortedCountries = countries.map(item => item["Country or region"]).sort();
        console.log('sortedCountries', sortedCountries);
        return sortedCountries.map(country => Object.assign({}, { key: country, value: country, text: country }));
    }
}

module.exports = CountryController;
