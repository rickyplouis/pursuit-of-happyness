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
    getCountryKey(year) {
        if (year === "2018" || year === '2019') {
            return 'Country or region'
        }
        if (year === '2015' || year === '2016' || year === '2017') {
            return 'Country';
        }
        return 'Country or region'
    },
    getCountryOptions(countries, year) {
        let key = CountryController.getCountryKey(year);
        let sortedCountries = countries.map(item => item[key]).sort();
        return sortedCountries.map(country => Object.assign({}, { key: country, value: country, text: country }));
    },
    getKeysByYear(year) {
        let res = Object.keys(yearFileMap(year)[0]);
        //         const array = [2, 5, 9];

        // console.log(array);

        // const index = array.indexOf(5);
        // if (index > -1) {
        //   array.splice(index, 1);
        // }

        // // array = [2, 9]
        // console.log(array); 
        let index = res.indexOf(CountryController.getCountryKey(year));
        if (index > -1) {
            console.log('res', res);
            // remove "Country or Region || Country" from keys
            res.splice(index, 1);
            // remove "Overall Rank" from keys
            res.splice(res.indexOf('Overall rank'), 1);
            // remove "Score" from keys
            res.splice(res.indexOf('Score'), 1);
            res.splice(res.indexOf('Region'), 1);
        }
        console.log('getKeysByYear', res)
        return res;
    },
    formatData(country, year) {
        let countries = CountryController.getAllCountries(year);
        let countryKey = CountryController.getCountryKey(year);
        let res = countries.filter(item => item[countryKey] === country);
        const [selectedCountry] = res;
        const keys = CountryController.getKeysByYear(year);
        let data = keys.map((key) => Object.assign({ selectedProp: key, [country]: +(selectedCountry[key]).toFixed(2) }));
        console.log('data', data);
        return data;
    }
}

module.exports = CountryController;


// 2015 keys
// "Country": "Switzerland",
// "Region": "Western Europe",
// "Happiness Rank": 1,
// "Happiness Score": 7.587,
// "Standard Error": 0.03411,
// "Economy (GDP per Capita)": 1.39651,
// "Family": 1.34951,
// "Health (Life Expectancy)": 0.94143,
// "Freedom": 0.66557,
// "Trust (Government Corruption)": 0.41978,
// "Generosity": 0.29678,
// "Dystopia Residual": 2.51738

// 2016 keys
// "Country": "Denmark",
// "Region": "Western Europe",
// "Happiness Rank": 1,
// "Happiness Score": 7.526,
// "Lower Confidence Interval": 7.46,
// "Upper Confidence Interval": 7.592,
// "Economy (GDP per Capita)": 1.44178,
// "Family": 1.16374,
// "Health (Life Expectancy)": 0.79504,
// "Freedom": 0.57941,
// "Trust (Government Corruption)": 0.44453,
// "Generosity": 0.36171,
// "Dystopia Residual": 2.73939

// 2017 keys
// "Country": "Norway",
// "Happiness.Rank": 1,
// "Happiness.Score": 7.53700017929077,
// "Whisker.high": 7.59444482058287,
// "Whisker.low": 7.47955553799868,
// "Economy..GDP.per.Capita.": 1.61646318435669,
// "Family": 1.53352355957031,
// "Health..Life.Expectancy.": 0.796666502952576,
// "Freedom": 0.635422587394714,
// "Generosity": 0.36201223731041,
// "Trust..Government.Corruption.": 0.315963834524155,
// "Dystopia.Residual": 2.27702665328979

// 2018 keys
// {
//     "Overall rank": 1,
//     "Country or region": "Finland",
//     "Score": 7.632,
//     "GDP per capita": 1.305,
//     "Social support": 1.592,
//     "Healthy life expectancy": 0.874,
//     "Freedom to make life choices": 0.681,
//     "Generosity": 0.202,
//     "Perceptions of corruption": 0.393
//   },

// 2019 keys
// {
//     "Overall rank": 1,
//     "Country or region": "Finland",
//     "Score": 7.769,
//     "GDP per capita": 1.34,
//     "Social support": 1.587,
//     "Healthy life expectancy": 0.986,
//     "Freedom to make life choices": 0.596,
//     "Generosity": 0.153,
//     "Perceptions of corruption": 0.393
//   },


// {

//     selectedProp: "GDP",
//     GDP: 
// }

// Sample Data
// const data = [
//     {
//         "taste": "fruity",
//         "chardonay": 75,
//         "carmenere": 38,
//         "syrah": 27
//     },
//     {
//         "taste": "bitter",
//         "chardonay": 110,
//         "carmenere": 99,
//         "syrah": 73
//     },
//     {
//         "taste": "heavy",
//         "chardonay": 83,
//         "carmenere": 78,
//         "syrah": 70
//     },
//     {
//         "taste": "strong",
//         "chardonay": 69,
//         "carmenere": 69,
//         "syrah": 43
//     },
//     {
//         "taste": "sunny",
//         "chardonay": 110,
//         "carmenere": 96,
//         "syrah": 89
//     }
// ]
